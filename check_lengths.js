const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/const LV_VR = \[([\s\S]*?)\];/);
const arrayStr = '[' + match[1] + ']';
const arr = eval(arrayStr);
const lengths = arr.map(x => x.length);
const un = [...new Set(lengths)];
print = console.log;
print("Lengths in LV_VR:", un);
