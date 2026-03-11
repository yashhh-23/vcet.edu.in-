const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const buf = fs.readFileSync('C:/Users/Win10/Desktop/RESEARCH-FUNDING1.pdf');
const parser = new PDFParse();
parser.parse(buf).then(d => {
  console.log(d.text);
}).catch(e => console.error(e));
