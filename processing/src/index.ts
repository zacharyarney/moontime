import express from 'express';
import dotenv from 'dotenv';
import ffmpeg from 'fluent-ffmpeg';

dotenv.config();

const app = express();
const port = process.env.PORT ?? '3000';

app.use(express.json());

app.get('/', (_, res) => {
  res.status(200).json({ message: 'Hey there' });
});

app.post('/process-video', (req, res) => {
  console.log('REQ: ', req.body);
  const originalFilePath = req.body.originalFilePath;
  const processedFilePath = req.body.processedFilePath;

  if (!originalFilePath) {
    return res.status(400)
      .json({ message: 'Bad Request: Missing original file path.' });
  }
  if (!processedFilePath) {
    return res.status(400)
      .json({ message: 'Bad Request: Missing processed file path.' });
  }

  // scale filter is scaling based on the long axis rather than just width
  // 'if(gt(iw,ih),360,-2)' means if input width > input height, width = 360, else, maintain aspect ratio
  // scale format is 'scale=width:height'`
  ffmpeg(originalFilePath)
    .outputOptions('-filter:v',
      'scale=\'if(gt(iw\, ih)\,360\,-2)\':\'if(gt(iw\,ih)\,-2\,360)\'')
    .on('end', () => {
      res.status(200).json({ message: 'Video processed successfully' });
    })
    .on('error', err => {
      console.log(`Internal Server Error: ${err.message}`);
      res.status(500)
        .json({ message: `Internal Server Error: ${err.message}` });
    })
    .save(processedFilePath);
});

app.listen(port, () => {
  console.log(`========== LISTENING ON ${port} ==========`);
});
