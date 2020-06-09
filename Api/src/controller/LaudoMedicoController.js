const LaudoMedico = require("../models/LaudoMedico");
const Residente = require("../models/Residente");
const Usuario = require("../models/Usuario");
const moment = require("moment");
const { v4: uuidv4 } = require('uuid');

// const Sequelize = require("sequelize");
module.exports = {
  async index(req, res) {
    const laudos_medicos = await LaudoMedico.findAll({
      order: [
        ['data_hora_laudo'],
      ],
      where: {
        validado: false
      }
    });
    console.log(laudos_medicos)
    return res.status(200).json(laudos_medicos);

  },

  async store(req, res) {
    const autor_id = req.id;
    const {
      exame_id,
      paciente_id,
      dsc_diagn,
      cid
    } = req.body;
    try {

      const paciente = await Usuario.findOne({
        where: {
          cpf: paciente_id,
          tipo_usuario: "P"
        }
      });

      if (!!paciente) {
        const residente = await Residente.findOne({
          where: {
            cpf: autor_id
          }
        })

        if (!!residente) {
          const date = new Date(moment.now())
          const laudo_medico = await LaudoMedico.create({
            id: uuidv4(),
            autor_id,
            paciente_id,
            exame_id,
            data_hora_laudo: date,
            dsc_diagn,
            cid,
            validado: false
          })
          return res.json(laudo_medico);
        }
        return res.status(401).json({ error: "Usuario não é um residente" });;
      }
      return res.status(401).json({ error: "Id do paciente não cadastrado" });;
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }

  },

  async update(req, res) { },
  async destroy(req, res) {
    console.log("Entrou")
    const { id } = req.params;
    console.log(id)
    const laudo_medico = await LaudoMedico.destroy({
      where: {
        id: id,
      },
    });
    if (laudo_medico == 1) {
      return res.json("Laudo Medico Removido");
    } else if (laudo_medico == 0) {
      return res.json({ error: "Registro Exame não encontrado" });
    }
  },
};
