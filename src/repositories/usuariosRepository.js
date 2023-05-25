const {pool} = require('../config/db');

exports.getUsuariosByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return result.rows.shift();
};