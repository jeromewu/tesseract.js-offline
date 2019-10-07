const { createWorker } = require('tesseract.js');
const path = require('path');

const worker = createWorker({
  langPath: path.join(__dirname, '..', 'lang-data'), 
  logger: m => console.log(m),
});

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(path.join(__dirname, '..', 'images', 'testocr.png'));
  console.log(text);
  await worker.terminate();
})();
