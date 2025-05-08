require('./loadEnv');

const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT} (${process.env.NODE_ENV})`);
});
