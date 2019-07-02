const { TesseractWorker, OEM } = require('tesseract.js');
const path = require('path');

const worker = new TesseractWorker({
  langPath: path.join(__dirname, '..', 'lang-data'), 
});

worker
  .recognize(path.join(__dirname, '..', 'images', 'thai.png'), 'tha', { tessedit_ocr_engine_mode: OEM.LSTM_ONLY })
  .progress((info) => {
    console.log(info);
  })
  .then((result) => {
    console.log(result.text);
    process.exit();
  });
