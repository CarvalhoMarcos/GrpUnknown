const TipoExame = require("../models/TipoExame");
const { v4: uuidv4 } = require('uuid');
// const Sequelize = require("sequelize");
module.exports = {
  async index(req, res) {

    const tipoExames = await TipoExame.findAll({
      attributes: ["id", "nome_exame", "recomendacoes"],
    });

    return res.status(200).json(tipoExames);
  },

  async store(req, res) {
    const {
      nome_exame,
      recomendacoes
    } = req.body;


    try {

      // const user = await Usuario.findByPk(cpf);
      // console.log(user);
      const tipo_exame_existe = await TipoExame.findOne({
        where: {
          nome_exame: nome_exame,
          recomendacoes: recomendacoes,
        },
      });

      if (tipo_exame_existe) {
        res.status(400).json({ error: "Tipo_exame ja cadastrado" });
      } else {
        const tipo_exame = await TipoExame.create({
          id: uuidv4(),
          nome_exame,
          recomendacoes,
        });

        return res.json({ result: "Cadastro de tipo_exame concluido" });
      }
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }
  },
  async update(req, res) { },
  async destroy(req, res) {

  },
};
