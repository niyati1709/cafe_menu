import fs from 'fs';
import path from 'path';

const targetDir = path.resolve('public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const uploadsDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\9b8809cc-d09e-47b7-93f5-540941c41527\\.user_uploaded';

const mappings = [
  { src: 'media_1791906368347.jpg', dest: 'jalapeno-poppers-pizza.jpg' },
  { src: 'media_1791906427377.png', dest: 'exotic-garlic-bread.png' },
  { src: 'media_1791906457866.jpg', dest: 'lebanese-rice.jpg' },
  { src: 'media_1791906476042.jpg', dest: 'mushroom-manakish.jpg' },
  { src: 'media_1791906495735.jpg', dest: 'ravioli.jpg' },
  { src: 'media_1791906520083.jpg', dest: 'cilantro-rice.jpg' },
  { src: 'media_1791906538186.png', dest: 'cheese-garlic-bread.png' },
  { src: 'media_1791906551776.jpg', dest: 'turkish-falafel.jpg' },
  { src: 'media_1791906569021.jpg', dest: 'babaganush.jpg' },
  { src: 'media_1791906580447.jpg', dest: 'madrid-falafel.jpg' },
  { src: 'media_1791906601946.jpg', dest: 'falafel-quesadilla.jpg' },
  { src: 'media_1791906623652.png', dest: 'roasted-garlic-parmesan-hummus.png' },
  { src: 'media_1791906665885.jpg', dest: 'fattoush-salad.jpg' },
  { src: 'media_1791906685533.jpg', dest: 'cheese-nachos.jpg' },
  { src: 'media_1791906696372.jpg', dest: 'family-falafel-platter.jpg' },
  { src: 'media_1791906720437.jpg', dest: 'mushroom-spaghetti-aglio-olio.jpg' },
  { src: 'media_1791906751650.png', dest: 'alfredo-pasta.png' },
  { src: 'media_1791906766747.png', dest: 'indian-falafel.png' },
  { src: 'media_1791906781635.jpg', dest: 'falafel-salad.jpg' },
  { src: 'media_1791906781635.jpg', dest: 'loaded-hummus.jpg' },
];

for (const { src, dest } of mappings) {
  const srcPath = path.join(uploadsDir, src);
  const destPath = path.join(targetDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${destPath}`);
  } else {
    console.warn(`Source not found: ${srcPath}`);
  }
}
