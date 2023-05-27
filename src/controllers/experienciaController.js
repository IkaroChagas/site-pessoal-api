const experienciasRepository = require('../repositories/experienciasRepository');

exports.getAllExperiencias = async (req, res, next) => {
    const tipo = req.query.tipo;
    const experiencias = await experienciasRepository.getAllExperiencias(tipo);
    res.json(experiencias);
}

exports.getExperienciasById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const experiencias = await experienciasRepository.getExperienciasById(id);
    res.json(experiencias);
};

exports.createExperiencia = async (req, res, next) => {
    const experiencia = req.body;
    const newExperiencia = await experienciasRepository.createExperiencia(experiencia);
    res.json(newExperiencia);
};

exports.updateExperiencia = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const experiencia = req.body;
    const updateExperiencia = await experienciasRepository.updateExperiencia(id, experiencia);
    res.json(updateExperiencia);
};

exports.deleteExperiencia = async (req, res, next) => {
    const id = parseInt(req.params.id);
    await experienciasRepository.deleteExperiencia(id);
    res.json({message: `Experiencia ${id} deletada`});
};