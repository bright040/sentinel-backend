const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({
    statut: "SENTINEL Backend en ligne",
    firebase: "connecté"
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Sentinel Backend en ligne sur le port ${PORT}`);
});
