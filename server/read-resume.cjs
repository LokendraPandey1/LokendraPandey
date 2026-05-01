const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse/lib/pdf-parse.js');

const pdfPath = path.join(__dirname, '../client/public/resume.pdf');
const buffer = fs.readFileSync(pdfPath);

pdfParse(buffer).then(data => {
  console.log('=== RESUME TEXT ===');
  console.log(data.text);
}).catch(err => console.error('Error:', err));
