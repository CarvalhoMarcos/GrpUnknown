const RegistroExame = require("../models/RegistroExame");
const Residente = require("../models/Residente");
const { v4: uuidv4 } = require('uuid');
const database = require("../database/index");
// const Sequelize = require("sequelize");
module.exports = {
  async index(req, res) {
    const { id } = req.params;
    if (id == undefined) {
      const registros_exame = await RegistroExame.findAll({
        order: [
          ['data_hora_exame'],
        ]
      });
      console.log(registros_exame)
      return res.status(200).json(registros_exame);
    } else {
      const registros_exame = await RegistroExame.findAll({
        where: {
          examinador_id: id
        },
        order: [
          ['data_hora_exame'],
        ]
      });

      return res.status(200).json(registros_exame);
    }
    // // const id = req.id;

    // // const medico = await Medico.findOne({
    // //   where: {
    // //     cpf: id
    // //   }
    // // });
    // // if (!!medico) {
    // const pedidos_exame = await PedidosExame.findAll({
    //   order: [
    //     ['data_prev'],
    //   ]
    // });

    // return res.json(pedidos_exame);
    // // }
    // // return res.status(401).json("Usuario não é um médico");;

  },
  async registrosPendentes(req, res) {
    const [
      results,
      metadata,
    ] = await database.query(`SELECT ID, PEDIDO_ID, EXAMINADOR_ID, DATA_HORA_EXAME
    REGISTROS_EXAMES LEFT JOIN LAUDOS_MEDICOS
    WHERE LAUDOS_MEDICOS.ID_LAUDO = NULL`);

    return res.status(200).json(results);

  },


  async store(req, res) {
    const id = req.id;
    const {
      pedido_id,
      pdf_id,
      data_hora_exame,
    } = req.body;
    const examinador_id = req.id;
    try {

      const residente = await Residente.findOne({
        where: {
          cpf: id
        }
      });
      if (!!residente) {
        const registros_exame = await RegistroExame.create({
          id: uuidv4(),
          examinador_id,
          pedido_id,
          pdf_id,
          data_hora_exame,
        });
        return res.json(registros_exame);

      }
      return res.status(401).json("Usuario não é um residente");;
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }

  },

  async update(req, res) { },
  async destroy(req, res) {
    const { id } = req.params;

    const registroExame = await RegistroExame.destroy({
      where: {
        id: id,
      },
    });
    if (registroExame == 1) {
      return res.json("Registro Exame Removido");
    } else if (registroExame == 0) {
      return res.json("Registro Exame não encontrado");
    }
  },
};
