const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/api/portfolio', (req, res) => {
  res.json({ message: 'Portfolio backend running' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
