const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../client/public/hero-bg.jpg');
const outputPath = path.join(__dirname, '../client/public/hero-bg.jpg');

sharp(inputPath)
  .sharpen({
    sigma: 1.5,      // sharpening radius
    m1: 1.5,         // flat area sharpening
    m2: 0.7,         // jagged area sharpening
    x1: 2,
    y2: 15,
    y3: 15
  })
  .modulate({
    brightness: 1.05,   // slight brightness boost
    saturation: 0.85,   // desaturate slightly for dark theme
  })
  .toFile(outputPath.replace('.jpg', '-sharpened.jpg'))
  .then(info => {
    console.log('✅ Image sharpened successfully!', info);
    // Now replace original
    const fs = require('fs');
    fs.copyFileSync(outputPath.replace('.jpg', '-sharpened.jpg'), outputPath);
    fs.unlinkSync(outputPath.replace('.jpg', '-sharpened.jpg'));
    console.log('✅ Replaced original hero-bg.jpg with sharpened version.');
  })
  .catch(err => console.error('❌ Error:', err));
