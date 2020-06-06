const LaudoMedico = require("../models/LaudoMedico");
const Validacao = require("../models/Validacao");
const Medico = require("../models/Medico");
const moment = require("moment");
const database = require("../database/index");
const { v4: uuidv4 } = require('uuid');

// const Sequelize = require("sequelize");
module.exports = {
  async index(req, res) {
    const validacoes = await Validacao.findAll({
      order: [
        ['data_hora_validacao'],
      ],
    });
    console.log(validacoes)
    return res.status(200).json(validacoes);

  },

  async store(req, res) {
    const validador_id = req.id;
    const {
      laudo_id,
      status,
      dsc_diagn,
      cid
    } = req.body;
    try {

      const medico = await Medico.findOne({
        where: {
          cpf: validador_id,
        }
      });

      if (!!medico) {
        const laudo_medico = await LaudoMedico.findOne({
          where: {
            id: laudo_id
          }
        })

        if (!!laudo_medico) {
          const date = new Date(moment.now())
          const validacao = await Validacao.create({
            id: uuidv4(),
            laudo_id,
            validador_id,
            data_hora_validacao: date,
            status,
            dsc_diagn,
            cid
          })

          await database.query(`Update laudos_medicos set validado = true where id='${laudo_id}'`);
          return res.json(validacao);
        }
        return res.status(401).json({ error: "Laudo não existe" });;
      }
      return res.status(401).json({ error: "Usuario não é um medico" });;
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }

  },

  async update(req, res) { },
  async destroy(req, res) {
    // const { id } = req.params;

    // const validacao = await Validacao.destroy({
    //   where: {
    //     id: id,
    //   },
    // });
    // if (validacao == 1) {
    //   return res.json("Validacao Removido");

    // } else if (laudo_medico == 0) {
    //   return res.json({ error: "Registro Exame não encontrado" });
    // }
  },
};
