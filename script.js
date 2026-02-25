const STA = [
    "Retiro", "Saldías", "Cd. Universitaria", "A. del Valle", "M. Padilla",
    "Florida", "Munro", "Carapachay", "V. Adelina", "Boulogne",
    "V. Montes", "Don Torcuato", "A. Sourdeaux", "Villa de Mayo", "Los Polvorines",
    "P. Nogués", "Grand Bourg", "Tierras Altas", "Tortuguitas",
    "M. Alberti", "Del Viso", "C. Grierson", "Villa Rosa"
];
// Me gusta cocinar aparte de hacer codigo, es relajante y lo siento como una muestra de amor
let DATASETS = {
    lv: { vr: [], ret: [] },
    sab: { vr: [], ret: [] },
    dom: { vr: [], ret: [] },
};

async function initData() {
    try {
        const resp = await fetch('horarios_por_paginas.json');
        const json = await resp.json();

        for (let pageKey in json) {
            const pageData = json[pageKey];
            if (!pageData || pageData.length < 3) continue;

            const title = pageData[0][0] || "";
            let dayKey = 'lv';
            if (title.includes("SÁBADOS")) dayKey = 'sab';
            else if (title.includes("DOMINGOS")) dayKey = 'dom';

            const subKey = title.includes("HACIA VILLA ROSA") ? "vr" : "ret";

            for (let i = 2; i < pageData.length; i++) {
                const row = pageData[i];

                if (row[0] && /^\d+$/.test(row[0])) {
                    const formattedRow = [parseInt(row[0])];

                    for (let j = 1; j < row.length; j++) {
                        formattedRow.push(row[j] || null);
                    }
                    DATASETS[dayKey][subKey].push(formattedRow);
                }
            }
        }
        render();
    } catch (e) {
        console.error("Error loading schedule:", e);
        const grid = document.getElementById('grid');
        if (grid) grid.innerHTML = `<div class="no-results" style="color:var(--red)">
            Error al cargar los datos. Por favor, asegúrate de que la URL termine en "/" 
            o intenta recargar la página.<br><small>${e.message}</small>
        </div>`;
    }
}

initData();

let dir = 'vr';
let day = 'lv';

function setDir(d) {
    dir = d;
    document.getElementById('btn-vr').className = 'pill' + (d === 'vr' ? ' active' : '');
    document.getElementById('btn-ret').className = 'pill' + (d === 'ret' ? ' active' : '');
    populateSelects();
    render();
}

function setDay(d) {
    day = d;
    ['lv', 'sab', 'dom'].forEach(x => {
        document.getElementById('btn-' + x).className = 'pill' + (x === d ? ' active' : '');
    });
    render();
}

function getDataset() {
    return (DATASETS[day] || DATASETS['lv'])[dir] || DATASETS['lv'][dir];
}

function getDisplayStations() {
    if (dir === 'vr') return STA;
    return [...STA].reverse();
}

function dispToData(dispIdx) {
    return dispIdx;
}

function timeToMin(t) {
    if (!t) return null;
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
}

function nowMin() {
    const n = new Date();
    return n.getHours() * 60 + n.getMinutes();
}

function getTrainTag(row) {
    const stations = getDisplayStations();
    let startIdx = 1;
    while (startIdx < row.length - 1 && !row[startIdx]) startIdx++;
    let endIdx = row.length - 1;
    while (endIdx > 1 && !row[endIdx]) endIdx--;

    const clean = (s) => s.replace("Cd. ", "").replace("Ciudad ", "").replace("Ing. ", "").replace("Vicealmirante ", "V. ").trim();
    const originName = clean(stations[startIdx - 1]);
    const destName = clean(stations[endIdx - 1]);

    const startsLate = startIdx > 1;
    const endsEarly = endIdx < row.length - 1;

    if (!startsLate && !endsEarly) return '<span class="next-tag tag-local">Completo</span>';
    if (startsLate && !endsEarly) return `<span class="next-tag tag-expreso">Local ${originName}</span>`;
    if (!startsLate && endsEarly) return `<span class="next-tag tag-expreso">Hasta ${destName}</span>`;
    return `<span class="next-tag tag-directo">${originName} ➜ ${destName}</span>`;
}

function populateSelects() {
    const stations = getDisplayStations();
    ['selFrom', 'selTo'].forEach((id, si) => {
        const sel = document.getElementById(id);
        const prev = sel.value;
        sel.innerHTML = '<option value="">— Todas —</option>';
        stations.forEach((s, i) => {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = s;
            sel.appendChild(opt);
        });
        if (prev) sel.value = prev;
    });
}

function render() {
    const stations = getDisplayStations();
    const dataset = getDataset();
    const fromDisp = parseInt(document.getElementById('selFrom').value);
    const toDisp = parseInt(document.getElementById('selTo').value);
    const fromData = isNaN(fromDisp) ? null : dispToData(fromDisp);
    const toData = isNaN(toDisp) ? null : dispToData(toDisp);

    let colDispIdxs = stations.map((_, i) => i);

    const now = nowMin();
    let rows = dataset.filter(row => {
        if (fromData !== null && !row[fromData + 1]) return false;
        if (toData !== null && !row[toData + 1]) return false;
        if (fromData !== null && toData !== null && fromData >= toData) return false;
        return true;
    });

    let nextTrain = null, nextDiff = Infinity;
    if (fromData !== null) {
        rows.forEach(row => {
            const t = row[fromData + 1];
            if (!t) return;
            let m = timeToMin(t);
            if (m < now - 120) m += 1440;
            const diff = m - now;
            if (diff >= 0 && diff < nextDiff) {
                nextDiff = diff;
                nextTrain = row;
            }
        });
    }

    const banner = document.getElementById('nextBanner');
    if (nextTrain && fromData !== null && nextDiff < 1440) {
        const fromT = nextTrain[fromData + 1];
        const toT = toData !== null ? nextTrain[toData + 1] : null;
        const cdText = nextDiff === 0 ? '¡Ya!' : nextDiff < 60 ? `${nextDiff} min` : `${Math.floor(nextDiff / 60)}h ${nextDiff % 60}m`;
        const fromName = stations[fromDisp];
        const toName = toData !== null ? stations[toDisp] : null;
        banner.innerHTML = `<div class="next-card">
      <div class="next-pulse"></div>
      <div class="next-info">
        <div class="next-label">Próximo tren desde ${fromName}</div>
        <div class="next-time">${fromT}${toT ? ` → ${toT}` : ''}</div>
        <div class="next-detail">
          Tren <strong>#${nextTrain[0]}</strong>
          ${toName ? `· llega a <strong>${toName}</strong> a las <strong style="color:var(--green)">${toT}</strong>` : ''}
          &nbsp; ${getTrainTag(nextTrain)}
        </div>
      </div>
      <div class="next-countdown">
        <div class="cd-num">${cdText}</div>
        <div class="cd-label">para salir</div>
      </div>
    </div>`;
    } else {
        banner.innerHTML = '';
    }

    const dirLabel = dir === 'vr' ? '→ Villa Rosa' : '→ Retiro';
    const dayLabel = { lv: 'Lunes a Viernes', sab: 'Sábados', dom: 'Domingos y Feriados' }[day];
    document.getElementById('sectionTitle').textContent = `Partidas ${dirLabel} · ${dayLabel}`;
    document.getElementById('sectionCount').textContent = `${rows.length} trenes`;

    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    if (rows.length === 0) {
        grid.innerHTML = '<div class="no-results">Sin resultados para esta selección</div>';
        return;
    }

    const cols = colDispIdxs.length;
    const isMobile = window.innerWidth <= 600;
    const firstColW = isMobile ? '72px' : '115px';
    const colW = isMobile ? 'minmax(62px, 1fr)' : 'minmax(80px, 1fr)';
    const gridCols = `${firstColW} repeat(${cols}, ${colW})`;
    grid.style.gridTemplateColumns = gridCols;

    const hdr = document.createElement('div');
    hdr.className = 'station-header';

    const th0 = document.createElement('div');
    th0.className = 'sh-cell sh-horizontal';
    th0.textContent = 'Nº';
    hdr.appendChild(th0);

    colDispIdxs.forEach((di, ci) => {
        const dataIdx = dispToData(di);
        const th = document.createElement('div');
        const colClass = `sh-col-${ci % 2 === 0 ? 'even' : 'odd'}`;
        th.className = `sh-cell ${colClass}`;
        if (di === fromDisp) th.classList.add('from-col');
        if (di === toDisp) th.classList.add('to-col');

        let name = stations[di];
        if (isMobile) {
            name = name
                .replace('Ciudad Universitaria', 'Cd. Univ.')
                .replace('Cd. Universitaria', 'Cd. Univ.')
                .replace('Vicealmirante', 'V.')
                .replace('Ingeniero', 'Ing.')
                .replace('Los Polvorines', 'L. Polvorines')
                .replace('Don Torcuato', 'D. Torcuato')
                .replace('Villa de Mayo', 'V. de Mayo')
                .replace('Grand Bourg', 'Gd. Bourg')
                .replace('Tierras Altas', 'T. Altas')
                .replace('Tortuguitas', 'Tortuguitas')
                .replace('M. Alberti', 'M. Alberti')
                .replace('V. Montes', 'V. Montes');
        }
        th.textContent = name;
        hdr.appendChild(th);
    });
    grid.appendChild(hdr);

    rows.forEach((row, ri) => {
        const isNext = nextTrain && row[0] === nextTrain[0];
        const fromTime = fromData !== null ? row[fromData + 1] : row.find((v, i) => i > 0 && v);
        const fromMin = fromTime ? timeToMin(fromTime) : null;
        let adjMin = fromMin;
        if (adjMin !== null && adjMin < now - 120) adjMin += 1440;
        const isPast = adjMin !== null && adjMin < now && !isNext;

        const tr = document.createElement('div');
        tr.className = `train-row ${ri % 2 === 0 ? 'even' : 'odd'}${isNext ? ' is-next' : ''}${isPast ? ' past' : ''}`;

        const td0 = document.createElement('div');
        td0.className = 'cell cell-num';
        td0.innerHTML = `<span class="train-n">#${row[0]}</span>${getTrainTag(row)}`;
        tr.appendChild(td0);

        colDispIdxs.forEach((di, ci) => {
            const dataIdx = dispToData(di);
            const val = row[dataIdx + 1];
            const td = document.createElement('div');
            const colClass = `cell-${ci % 2 === 0 ? 'even' : 'odd'}`;
            td.className = `cell ${colClass}`;

            if (!val) {
                const sp = document.createElement('span');
                sp.className = 'no-stop';
                sp.textContent = '·';
                td.appendChild(sp);
            } else {
                const sp = document.createElement('span');
                sp.className = 'cell-time';
                if (di === fromDisp) sp.classList.add('from-time');
                else if (di === toDisp) sp.classList.add('to-time');
                if (isNext && di === fromDisp) sp.classList.add('next-time');
                sp.textContent = val;
                td.appendChild(sp);
            }
            tr.appendChild(td);
        });

        grid.appendChild(tr);
    });

    if (fromData !== null) {
        const nextRow = grid.querySelector('.train-row.is-next');
        if (nextRow) {
            setTimeout(() => {
                nextRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    }
}

function tick() {
    const n = new Date();
    const pad = x => String(x).padStart(2, '0');
    document.getElementById('clock').textContent =
        `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`;
}

function autoDay() {
    const d = new Date().getDay();
    if (d === 0) setDay('dom');
    else if (d === 6) setDay('sab');
    else setDay('lv');
}

autoDay();
populateSelects();
render();
tick();
setInterval(tick, 1000);
setInterval(render, 30000);