const {pool} = require("../config/db");

exports.getPortfolio = async () => {
    const result = await pool.query("SELECT * FROM portfolio");
    return result.rows;
}

exports.getPortfolioById = async (id) => {
    const result = await pool.query("SELECT * FROM portfolio WHERE id = $1", [id]);
    return result.rows[0];
};

exports.createPortfolio = async (portfolio) => {
    const result = await pool.query(`
        INSERT INTO portfolio (titulo, descricao, link, imagem)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        [portfolio.titulo, portfolio.descricao, portfolio.link, portfolio.imagem]);
        return result.rows[0];
};
    