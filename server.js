const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.text({ type: '*/*' }));

app.all('/', (req, res) => {
  const body = req.body;
  console.log('Received:', body);
  fs.appendFileSync('data.txt', `${new Date().toISOString()} - ${body}\n\n`);
  res.send('Response received and saved.');
});

app.get('/download', (req, res) => {
  res.download('data.txt');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
