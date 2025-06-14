// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir todo lo demás a index.html (opcional para SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`App ejecutándose en http://localhost:${port}`);
});
