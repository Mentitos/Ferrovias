const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const SAB_RET = [
            [3002, null, null, null, null, null, null, null, null, "00:15", "00:20", "00:24", "00:28", "00:31", "00:35", "00:39", "00:43", "00:47", "00:50", "00:53", "00:56", "01:00", "01:07"]
];
const STA = [
    "Retiro", "Saldías", "Cd. Universitaria", "A. del Valle", "M. Padilla",
    "Florida", "Munro", "Carapachay", "V. Adelina", "Boulogne",
    "Don Torcuato", "A. Sourdeaux", "Cd. Villa de Mayo", "Cd. Los Polvorines",
    "Cd. Ing. P. Nogués", "Cd. Grand Bourg", "Tierras Altas", "Cd. Tortuguitas",
    "M. Alberti", "Del Viso", "C. Grierson", "Villa Rosa"
];

function dispToData(dispIdx) {
    return (STA.length - 1) - dispIdx;
}

const stations = [...STA].reverse(); // VR -> Retiro
console.log("Di 0 is", stations[0]);
let dataIdx0 = dispToData(0); 
console.log("Reads index", dataIdx0 + 1, ":", SAB_RET[0][dataIdx0 + 1]);

console.log("Di 21 is", stations[21]);
let dataIdx21 = dispToData(21);
console.log("Reads index", dataIdx21 + 1, ":", SAB_RET[0][dataIdx21 + 1]);
