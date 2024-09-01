import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ?? '3000';

app.post('/process-video', (req, res) => {
    const originalFilePath = req.body.originalFilePath;
    const processedFilePath = req.body.processedFilePath;
    if (!originalFilePath) {
      res.status(400).send('Bad Request: Missing original file path.');
    }
    if (!processedFilePath) {
      res.status(400).send('Bad Request: Missing processed file path.');
    }
  },
);

app.listen(port, () => {
  console.log(`========== LISTENING ON ${port} ==========`);
});
