const { Pool } = require('pg');

const client = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT
})

module.exports = client;