const PedidosExame = require("../models/PedidosExame");
const Medico = require("../models/Medico");
const { v4: uuidv4 } = require('uuid');

// const Sequelize = require("sequelize");
module.exports = {
  async index(req, res) {
    const { id } = req.params;
    if (id == undefined) {
      const pedidos_exame = await PedidosExame.findAll({
        order: [
          ['data_prev'],
        ]
      });

      return res.status(200).json(pedidos_exame);
    } else {
      const pedidos_exame = await PedidosExame.findAll({
        where: {
          paciente_id: id
        },
        order: [
          ['data_prev'],
        ]
      });

      return res.status(200).json(pedidos_exame);
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

  async store(req, res) {
    const id = req.id;
    const {
      paciente_id,
      data_prev,
      tipo_exame_id,
      desc_diagn,
      cid,
      status
    } = req.body;

    try {

      const medico = await Medico.findOne({
        where: {
          cpf: id
        }
      });
      if (!!medico) {



        if (status === "C" || status === "E" || status === "P") {
          const pedido_exame = await PedidosExame.create({
            id: uuidv4(),
            paciente_id,
            medico_id: id,
            data_prev,
            tipo_exame_id,
            desc_diagn,
            cid,
            status
          });
          return res.json(pedido_exame);
        }
        return res.status(401).json("Status deve ser `E`, `C` ou `P`")
      }
      return res.status(401).json("Usuario não é um médico");;
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }

  },

  async update(req, res) { },
  async destroy(req, res) {

  },
};
