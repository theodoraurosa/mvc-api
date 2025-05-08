// loadEnv.js
const dotenv = require('dotenv');
const fs = require('fs');

const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env === 'development' ? 'dev' : env === 'homologation' ? 'hmg' : 'prod'}`;

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
  console.log(`✅ Variáveis carregadas de ${envFile}`);
} else {
  console.warn(`⚠️ Arquivo de ambiente ${envFile} não encontrado.`);
}

