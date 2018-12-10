const { Pool } = require('pg');


require('env2')('./config.env');

if (!process.env.USERS_DB_URL) throw new Error('DB_URL is not set');
const dbUrl = process.env.USERS_DB_URL;

module.exports = new Pool({ connectionString: dbUrl, ssl: true });

