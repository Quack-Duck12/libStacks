const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', from: 'nodejs-mobile' });
});

app.listen(3000, () => {
  console.log('Express running on-device, port 3000');
});