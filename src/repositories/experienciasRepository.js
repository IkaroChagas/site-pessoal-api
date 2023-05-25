const { pool } = require('../config/db');

exports.getAllExperiencias = async () => {
        let query = "SELECT * FROM experiencia";
        if (tipo) {
                query += `WHERE tipo = '${tipo}'`;      
        }
        const result = await pool.query("SELECT * FROM experiencia");
        return result.rows;
};

exports.getExperienciasById =  async (id) => {
        const result = await pool.query("SELECT * FROM experiencia WHERE id = $1", {id});
        return result.rows;
};

exports.createExperiencia = async (experiencia) => { 
        const result = await pool.query(`
        INSERT INTO experiencia (titulo, tipo, descricao, ano_inicio, ano_fim)
        VALUES ($1, $2, $3, $4);
        RETURNING *
        `,
       [experiencia.titulo, experiencia.tipo, experiencia.descricao, experiencia.ano_inicio, experiencia.ano_fim])
        return result.rows[0]
};

exports.updateExperiencia = async (id, experiencia) => {
        const result = await pool.query(`
                UPDATE experiencia
                SET titulo = $1, tipo = $2, descricao = $3 , ano_inicio = $4, ano_fim = $5
                WHERE id = ?
                RETURNING *
        `,
        [experiencia.titulo, experiencia.tipo, experiencia.descricao, experiencia.ano_inicio, experiencia.ano_fim])
        return result.rows[0]  
}

exports.deleteExperiencia = async (id) => {
        await pool.query("DELETE FROM experiencia WHERE id = $1", [id])
}