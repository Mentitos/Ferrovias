const STA = [
    "Retiro", "Saldías", "Cd. Universitaria", "A. del Valle", "M. Padilla",
    "Florida", "Munro", "Carapachay", "V. Adelina", "Boulogne",
    "V. Montes", "Don Torcuato", "A. Sourdeaux", "Villa de Mayo", "Los Polvorines",
    "P. Nogués", "Grand Bourg", "Tierras Altas", "Tortuguitas",
    "M. Alberti", "Del Viso", "C. Grierson", "Villa Rosa"
];
// Me gusta cocinar aparte de hacer codigo, es relajante y lo siento como una muestra de amor
const FARES_MATRIX = [
  [0.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0],
  [310.0, 0.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0],
  [310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0],
  [310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0],
  [420.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0, 520.0, 520.0],
  [420.0, 420.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0, 520.0, 520.0],
  [420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0, 520.0],
  [420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0],
  [420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0, 520.0],
  [420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 520.0, 520.0],
  [520.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0, 520.0],
  [520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0, 420.0],
  [520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0, 420.0],
  [520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0],
  [520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0],
  [520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0, 420.0],
  [520.0, 520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 310.0, 420.0],
  [520.0, 520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0, 420.0],
  [520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0, 310.0],
  [520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0, 310.0],
  [520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0, 310.0],
  [520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 310.0, 0.0, 310.0],
  [520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 520.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 420.0, 310.0, 310.0, 310.0, 310.0, 0.0]
];

function getStaIndex(dispIdx) {
    if (dir === 'vr') return dispIdx;
    return 22 - dispIdx;
}

let selectedFareType = 'reg';
function setFareType(val) {
    selectedFareType = val;
    render();
}

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

function setDir(d, prevFromName = null, prevToName = null) {
    dir = d;
    document.getElementById('btn-vr').className = 'pill' + (d === 'vr' ? ' active' : '');
    document.getElementById('btn-ret').className = 'pill' + (d === 'ret' ? ' active' : '');
    populateSelects(prevFromName, prevToName);
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

function populateSelects(prevFromName = null, prevToName = null) {
    const stations = getDisplayStations();
    
    const selFrom = document.getElementById('selFrom');
    const fromName = prevFromName || (selFrom ? selFrom.options[selFrom.selectedIndex]?.textContent : null);
    selFrom.innerHTML = '<option value="">— Todas —</option>';
    stations.forEach((s, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = s;
        selFrom.appendChild(opt);
    });
    if (fromName && fromName !== '— Todas —') {
        const idx = stations.indexOf(fromName);
        selFrom.value = idx >= 0 ? idx : "";
    }
    
    const selTo = document.getElementById('selTo');
    const toName = prevToName || (selTo ? selTo.options[selTo.selectedIndex]?.textContent : null);
    selTo.innerHTML = '<option value="">— Todas —</option>';
    stations.forEach((s, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = s;
        selTo.appendChild(opt);
    });
    if (toName && toName !== '— Todas —') {
        const idx = stations.indexOf(toName);
        selTo.value = idx >= 0 ? idx : "";
    }
}

let lastSelectedFrom = "";
let lastSelectedTo = "";

function render(shouldScroll = true) {
    const selFrom = document.getElementById('selFrom');
    const selTo = document.getElementById('selTo');
    if (selFrom && selTo) {
        let fromVal = selFrom.value;
        let toVal = selTo.value;
        if (fromVal !== "" && toVal !== "" && fromVal === toVal) {
            if (fromVal !== lastSelectedFrom) {
                selTo.value = lastSelectedFrom;
            } else if (toVal !== lastSelectedTo) {
                selFrom.value = lastSelectedTo;
            }
        }
        lastSelectedFrom = selFrom.value;
        lastSelectedTo = selTo.value;
    }

    const stations = getDisplayStations();
    const dataset = getDataset();
    const fromDisp = parseInt(document.getElementById('selFrom').value);
    const toDisp = parseInt(document.getElementById('selTo').value);
    const fromData = isNaN(fromDisp) ? null : dispToData(fromDisp);
    const toData = isNaN(toDisp) ? null : dispToData(toDisp);

    // Auto-switch para direccion
    if (fromData !== null && toData !== null) {
        const fromName = stations[fromDisp];
        const toName = stations[toDisp];
        const absoluteFromIdx = STA.indexOf(fromName);
        const absoluteToIdx = STA.indexOf(toName);
        
        if (absoluteFromIdx > absoluteToIdx && dir === 'vr') {
            setTimeout(() => {
                setDir('ret', fromName, toName);
            }, 0);
            return;
        } else if (absoluteFromIdx < absoluteToIdx && dir === 'ret') {
            setTimeout(() => {
                setDir('vr', fromName, toName);
            }, 0);
            return;
        }
    }

    const recenterFab = document.getElementById('recenterFab');
    if (recenterFab) {
        recenterFab.classList.remove('visible');
    }

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
    if (fromData !== null && toData !== null) {
        const fromSta = getStaIndex(fromDisp);
        const toSta = getStaIndex(toDisp);
        const baseFare = FARES_MATRIX[fromSta][toSta];
        
        let selectedFarePrice = 0;
        let sectionNum = '';
        if (baseFare > 0) {
            sectionNum = baseFare === 310 ? '1' : baseFare === 420 ? '2' : '3';
            if (selectedFareType === 'reg') {
                selectedFarePrice = baseFare;
            } else if (selectedFareType === 'soc') {
                if (baseFare === 310) selectedFarePrice = 139.50;
                else if (baseFare === 420) selectedFarePrice = 189.00;
                else selectedFarePrice = 234.00;
            } else if (selectedFareType === 'unreg') {
                if (baseFare === 310) selectedFarePrice = 620.00;
                else if (baseFare === 420) selectedFarePrice = 840.00;
                else selectedFarePrice = 1040.00;
            } else if (selectedFareType === 'cash') {
                selectedFarePrice = 1100.00;
            }
        }
        
        const fromName = stations[fromDisp];
        const toName = stations[toDisp];
        
        const fareRowHtml = baseFare > 0 ? `
            <div class="next-fare-row">
                <span class="fare-text">Boleto: <strong class="fare-amount">$${selectedFarePrice.toFixed(2).replace('.', ',')}</strong></span>
                <span class="fare-select-container">
                    <select class="fare-select-compact" onchange="setFareType(this.value)">
                        <option value="reg" ${selectedFareType === 'reg' ? 'selected' : ''}>SUBE Registrada</option>
                        <option value="soc" ${selectedFareType === 'soc' ? 'selected' : ''}>SUBE Social (-55%)</option>
                        <option value="unreg" ${selectedFareType === 'unreg' ? 'selected' : ''}>Sin Registrar</option>
                        <option value="cash" ${selectedFareType === 'cash' ? 'selected' : ''}>Efectivo (Única)</option>
                    </select>
                </span>
            </div>
        ` : '';

        if (nextTrain && nextDiff < 1440) {
            const fromT = nextTrain[fromData + 1];
            const toT = nextTrain[toData + 1] || null;
            const cdText = nextDiff === 0 ? '¡Ya!' : nextDiff < 60 ? `${nextDiff} min` : `${Math.floor(nextDiff / 60)}h ${nextDiff % 60}m`;
            
            banner.innerHTML = `
                <div class="next-card">
                    <div class="next-pulse"></div>
                    <div class="next-info">
                        <div class="next-label">Próximo tren desde ${fromName}</div>
                        <div class="next-time">${fromT}${toT ? ` → ${toT}` : ''}</div>
                        <div class="next-detail">
                            Tren <strong>#${nextTrain[0]}</strong>
                            ${toT ? `· llega a <strong>${toName}</strong> a las <strong style="color:var(--green)">${toT}</strong>` : ''}
                            &nbsp; ${getTrainTag(nextTrain)}
                        </div>
                        ${fareRowHtml}
                    </div>
                    <div class="next-countdown">
                        <div class="cd-num">${cdText}</div>
                        <div class="cd-label">para salir</div>
                    </div>
                </div>
            `;
        } else {
            banner.innerHTML = `
                <div class="next-card">
                    <div class="next-info">
                        <div class="next-label">Recorrido seleccionado</div>
                        <div class="next-time" style="font-size: 1.8rem; margin: 0.2rem 0;">${fromName} ➜ ${toName}</div>
                        <div class="next-detail">
                            No hay más trenes programados para el resto del día en esta selección.
                        </div>
                        ${fareRowHtml}
                    </div>
                </div>
            `;
        }
    } else {
        if (fromData !== null && toData === null && nextTrain && nextDiff < 1440) {
            const fromT = nextTrain[fromData + 1];
            const cdText = nextDiff === 0 ? '¡Ya!' : nextDiff < 60 ? `${nextDiff} min` : `${Math.floor(nextDiff / 60)}h ${nextDiff % 60}m`;
            const fromName = stations[fromDisp];
            
            banner.innerHTML = `
                <div class="next-card">
                    <div class="next-pulse"></div>
                    <div class="next-info">
                        <div class="next-label">Próximo tren desde ${fromName}</div>
                        <div class="next-time">${fromT}</div>
                        <div class="next-detail">
                            Tren <strong>#${nextTrain[0]}</strong> &nbsp; ${getTrainTag(nextTrain)}
                        </div>
                    </div>
                    <div class="next-countdown">
                        <div class="cd-num">${cdText}</div>
                        <div class="cd-label">para salir</div>
                    </div>
                </div>
            `;
        } else {
            banner.innerHTML = '';
        }
    }

    const dirLabel = dir === 'vr' ? '→ Villa Rosa' : '→ Retiro';
    const dayLabel = { lv: 'Lunes a Viernes', sab: 'Sábados', dom: 'Domingos y Feriados' }[day];
    document.getElementById('sectionTitle').textContent = `Partidas ${dirLabel} · ${dayLabel}`;
    document.getElementById('sectionCount').textContent = `${rows.length} trenes`;

    const grid = document.getElementById('grid');
    if (rows.length === 0) {
        grid.innerHTML = '<div class="no-results">Sin resultados para esta selección</div>';
        return;
    }

    const fragment = document.createDocumentFragment();

    const cols = colDispIdxs.length;
    const isMobile = window.innerWidth <= 600;
    const baseFirstColW = isMobile ? 72 : 115;
    const baseColWMin = isMobile ? 62 : 80;
    const firstColW = `calc(${baseFirstColW}px * var(--zoom, 1))`;
    const colW = `minmax(calc(${baseColWMin}px * var(--zoom, 1)), 1fr)`;
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
    fragment.appendChild(hdr);


    let lastPastIdx = -1;
    rows.forEach((row, ri) => {
        const fromTime = fromData !== null ? row[fromData + 1] : row.find((v, i) => i > 0 && v);
        const fromMin = fromTime ? timeToMin(fromTime) : null;
        let adjMin = fromMin;
        if (adjMin !== null && adjMin < now - 120) adjMin += 1440;
        if (adjMin !== null && adjMin < now) lastPastIdx = ri;
    });

    rows.forEach((row, ri) => {
        const isNext = nextTrain && row[0] === nextTrain[0];
        const fromTime = fromData !== null ? row[fromData + 1] : row.find((v, i) => i > 0 && v);
        const fromMin = fromTime ? timeToMin(fromTime) : null;
        let adjMin = fromMin;
        if (adjMin !== null && adjMin < now - 120) adjMin += 1440;
        const isLastPast = ri === lastPastIdx && !isNext;

        const tr = document.createElement('div');
        tr.className = `train-row ${ri % 2 === 0 ? 'even' : 'odd'}${isNext ? ' is-next' : ''}${isLastPast ? ' last-past' : ''}`;

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

        fragment.appendChild(tr);
    });

    grid.replaceChildren(fragment);

    if (shouldScroll && fromData !== null) {
        setTimeout(recenterScroll, 120);
    } else {
        setTimeout(updateRecenterFabVisibility, 150);
    }
}

function getTargetScrollPositions(grid) {
    const nextRow = grid.querySelector('.train-row.is-next');
    const fromHeader = grid.querySelector('.sh-cell.from-col');
    if (!nextRow) return { top: 0, left: 0, hasNext: false };
    
    const firstRow = grid.querySelector('.train-row');
    const rowH = nextRow.offsetHeight || 40;
    const BUFFER_ROWS = 1;
    const firstRowTop = firstRow ? firstRow.offsetTop : 0;
    const targetScrollTop = Math.max(0, (nextRow.offsetTop - firstRowTop) - rowH * BUFFER_ROWS);

    let targetScrollLeft = 0;
    if (fromHeader) {
        const numColW = grid.querySelector('.cell-num')?.offsetWidth || 72;
        const dataCells = grid.querySelectorAll('.station-header .sh-cell:not(.sh-horizontal)');
        let bufferColW = 62;
        if (dataCells.length > 1) bufferColW = dataCells[1].offsetWidth || 62;
        targetScrollLeft = fromHeader.offsetLeft - numColW - bufferColW;
    }
    return { top: Math.max(0, targetScrollTop), left: Math.max(0, targetScrollLeft), hasNext: true };
}

function updateRecenterFabVisibility() {
    const grid = document.getElementById('grid');
    const recenterFab = document.getElementById('recenterFab');
    if (!grid || !recenterFab) return;

    const fromDisp = parseInt(document.getElementById('selFrom').value);
    if (isNaN(fromDisp)) {
        recenterFab.classList.remove('visible');
        return;
    }

    const targets = getTargetScrollPositions(grid);
    if (!targets.hasNext) {
        recenterFab.classList.remove('visible');
        return;
    }

    const diffTop = Math.abs(grid.scrollTop - targets.top);
    const diffLeft = Math.abs(grid.scrollLeft - targets.left);

    if (diffTop > 45 || diffLeft > 45) {
        recenterFab.classList.add('visible');
    } else {
        recenterFab.classList.remove('visible');
    }
}

function recenterScroll() {
    const grid = document.getElementById('grid');
    if (!grid) return;
    
    grid.style.setProperty('--zoom', 1);
    grid.activeZoom = 1;
    
    const targets = getTargetScrollPositions(grid);
    if (targets.hasNext) {
        grid.scrollTo({
            top: targets.top,
            left: targets.left,
            behavior: 'smooth'
        });
    }
}

function tick() {
    const n = new Date();
    const pad = x => String(x).padStart(2, '0');
    document.getElementById('clock').textContent =
        `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`;
}

const FERIADOS = [
    { "fecha": "2026-01-01", "motivo": "Año Nuevo", "tipo": "inamovible" },
    { "fecha": "2026-02-16", "motivo": "Carnaval", "tipo": "inamovible" },
    { "fecha": "2026-02-17", "motivo": "Carnaval", "tipo": "inamovible" },
    { "fecha": "2026-03-23", "motivo": "Feriado con fines turísticos", "tipo": "turistico" },
    { "fecha": "2026-03-24", "motivo": "Día Nacional de la Memoria por la Verdad y la Justicia", "tipo": "inamovible" },
    { "fecha": "2026-04-02", "motivo": "Día del Veterano y de los Caídos en la Guerra de Malvinas", "tipo": "inamovible" },
    { "fecha": "2026-04-03", "motivo": "Viernes Santo", "tipo": "inamovible" },
    { "fecha": "2026-05-01", "motivo": "Día del Trabajador", "tipo": "inamovible" },
    { "fecha": "2026-05-25", "motivo": "Día de la Revolución de Mayo", "tipo": "inamovible" },
    { "fecha": "2026-06-15", "motivo": "Paso a la Inmortalidad del Gral. Don Martín Miguel de Güemes (traslado del 17/6)", "tipo": "trasladable" },
    { "fecha": "2026-06-20", "motivo": "Paso a la Inmortalidad del Gral. Manuel Belgrano", "tipo": "inamovible" },
    { "fecha": "2026-07-09", "motivo": "Día de la Independencia", "tipo": "inamovible" },
    { "fecha": "2026-07-10", "motivo": "Feriado con fines turísticos", "tipo": "turistico" },
    { "fecha": "2026-08-17", "motivo": "Paso a la Inmortalidad del Gral. José de San Martín", "tipo": "trasladable" },
    { "fecha": "2026-10-12", "motivo": "Día del Respeto a la Diversidad Cultural", "tipo": "trasladable" },
    { "fecha": "2026-11-23", "motivo": "Día de la Soberanía Nacional (traslado del 20/11)", "tipo": "trasladable" },
    { "fecha": "2026-12-07", "motivo": "Feriado con fines turísticos", "tipo": "turistico" },
    { "fecha": "2026-12-08", "motivo": "Inmaculada Concepción de María", "tipo": "inamovible" },
    { "fecha": "2026-12-25", "motivo": "Navidad", "tipo": "inamovible" }
];

function getLocalDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function autoDay() {
    const localDate = getLocalDateString();
    const feriado = FERIADOS.find(f => f.fecha === localDate);
    const holidayMsg = document.getElementById('holidayMsg');
    
    if (feriado) {
        setDay('dom');
        if (holidayMsg) {
            holidayMsg.textContent = ` · HOY ES FERIADO: ${feriado.motivo.toUpperCase()}`;
        }
    } else {
        const d = new Date().getDay();
        if (d === 0) setDay('dom');
        else if (d === 6) setDay('sab');
        else setDay('lv');
        if (holidayMsg) {
            holidayMsg.textContent = '';
        }
    }
}

autoDay();
populateSelects();
render();
tick();

const gridEl = document.getElementById('grid');
if (gridEl) {
    gridEl.addEventListener('scroll', updateRecenterFabVisibility);
}
setInterval(tick, 1000);
setInterval(() => render(false), 30000);

(function initDragScroll() {
    const el = document.getElementById('grid');
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;

    el.addEventListener('mousedown', e => {
        if (e.button !== 0) return;
        isDown = true;
        el.classList.add('drag-scrolling');
        startX = e.pageX - el.offsetLeft;
        startY = e.pageY - el.offsetTop;
        scrollLeft = el.scrollLeft;
        scrollTop = el.scrollTop;
        e.preventDefault();
    });

    const stop = () => {
        isDown = false;
        el.classList.remove('drag-scrolling');
    };

    el.addEventListener('mouseleave', stop);
    el.addEventListener('mouseup', stop);
    window.addEventListener('mouseup', stop);

    el.addEventListener('mousemove', e => {
        if (!isDown) return;
        const x = e.pageX - el.offsetLeft;
        const y = e.pageY - el.offsetTop;
        el.scrollLeft = scrollLeft - (x - startX) * 1.2;
        el.scrollTop = scrollTop - (y - startY) * 1.2;
    });
})();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado con éxito:', reg.scope))
            .catch(err => console.error('Error al registrar Service Worker:', err));
    });
}

let deferredPrompt = null;
const pwaBanner = document.getElementById('pwaBanner');
const btnPwaInstall = document.getElementById('btnPwaInstall');

window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    
    const isDismissed = localStorage.getItem('pwa_dismissed');
    const dismissedTime = localStorage.getItem('pwa_dismissed_time');
    
    if (isDismissed === 'true' && dismissedTime) {
        const timeDiff = Date.now() - parseInt(dismissedTime);
        if (timeDiff < 24 * 60 * 60 * 1000) {
            return;
        }
    }
    
    if (pwaBanner) {
        pwaBanner.classList.add('visible');
    }
});

if (btnPwaInstall) {
    btnPwaInstall.addEventListener('click', () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('El usuario aceptó la instalación');
            }
            deferredPrompt = null;
            if (pwaBanner) {
                pwaBanner.classList.remove('visible');
            }
        });
    });
}

function dismissPwaBanner(e) {
    if (e) e.preventDefault();
    const banner = document.getElementById('pwaBanner');
    if (banner) {
        banner.classList.remove('visible');
        
        setTimeout(() => {
            const installBtn = document.getElementById('btnPwaInstall');
            const contentSpan = banner.querySelector('.pwa-mini-text');
            if (installBtn) installBtn.style.display = 'inline-block';
            if (contentSpan) contentSpan.textContent = "Agregar a pantalla de inicio";
        }, 300);
    }
    if (e && e.target && e.target.classList.contains('pwa-mini-btn-dismiss')) {
        localStorage.setItem('pwa_dismissed', 'true');
        localStorage.setItem('pwa_dismissed_time', Date.now().toString());
    }
}

function showPwaInstructions(e) {
    if (e) e.preventDefault();
    const banner = document.getElementById('pwaBanner');
    if (!banner) return;

    if (deferredPrompt) {
        banner.classList.add('visible');
    } else {
        const contentSpan = banner.querySelector('.pwa-mini-text');
        const installBtn = document.getElementById('btnPwaInstall');
        
        if (window.location.protocol === 'file:') {
            if (contentSpan) contentSpan.textContent = "Abrilo desde un servidor local o HTTPS para poder instalarlo.";
            if (installBtn) installBtn.style.display = 'none';
        } else if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            if (contentSpan) contentSpan.textContent = "En iOS: Tocá 'Compartir' en Safari y elegí 'Agregar a pantalla de inicio'.";
            if (installBtn) installBtn.style.display = 'none';
        } else {
            if (contentSpan) contentSpan.textContent = "Tocá los 3 puntos (⋮ o ⋯) del navegador y elegí 'Instalar' o 'Agregar'.";
            if (installBtn) installBtn.style.display = 'none';
        }
        
        banner.classList.add('visible');
    }
}

(function initPinchZoom() {
    const grid = document.getElementById('grid');
    if (!grid) return;

    grid.activeZoom = 1;
    let initialDist = 0;
    let isPinching = false;

    grid.addEventListener('touchstart', e => {
        if (e.touches.length === 2) {
            isPinching = true;
            initialDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    }, { passive: true });

    grid.addEventListener('touchmove', e => {
        if (isPinching && e.touches.length === 2) {
            const currentDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            
            if (initialDist > 0) {
                const ratio = currentDist / initialDist;
                let newZoom = Math.min(Math.max((grid.activeZoom || 1) * ratio, 0.65), 1.6);
                grid.style.setProperty('--zoom', newZoom);
            }
        }
    }, { passive: true });

    grid.addEventListener('touchend', e => {
        if (isPinching) {
            const currentZoomStr = grid.style.getPropertyValue('--zoom');
            if (currentZoomStr) {
                grid.activeZoom = parseFloat(currentZoomStr);
            }
            isPinching = false;
        }
    });
})();