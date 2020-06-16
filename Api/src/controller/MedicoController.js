const Usuario = require("../models/Usuario");
const Medico = require("../models/Medico");
const database = require("../database/index");
const bcrypt = require("bcryptjs");
const moment = require("moment");
// const Sequelize = require("sequelize");
module.exports = {
  async index(req, res) {
    const { id } = req.params;
    if (id == undefined) {
      const [
        results,
        metadata,
      ] = await database.query(`Select M.cpf, U.nome, U.email,M.crm,M.eh_docente,
         M.titulo_uni from medicos M inner join usuarios U on(M.cpf =U.cpf) where U.tipo_usuario='M'`);

      return res.status(200).json(results);
    } else {
      const [
        results,
        metadata,
      ] = await database.query(`Select M.cpf, U.nome, U.email,M.crm,M.eh_docente,
        M.titulo_uni from medicos M inner join usuarios U on(M.cpf =U.cpf) where U.tipo_usuario='M' and M.cpf='${id}'`);

      return res.status(200).json(results);
    }
  },

  async store(req, res) {
    console.log(req.body);
    const {
      cpf,
      nome,
      email,
      tipo_usuario,
      password,
      data_nasc,
      sexo,
      cor,
      crm,
      eh_docente,
      titulo_uni,
    } = req.body;

    let data = moment(data_nasc, "YYYY-MM-DD");

    data = new Date(data);
    try {
      const password_hash = await bcrypt.hash(password, 8);

      // const user = await Usuario.findByPk(cpf);
      // console.log(user);
      const usuario_existe = await Usuario.findOne({
        where: {
          cpf: cpf,
          tipo_usuario: tipo_usuario,
        },
      });

      if (usuario_existe) {
        res.status(400).json({ error: "Usuario ja cadastrado" });
      } else {
        const usuario = await Usuario.create({
          cpf,
          nome,
          email,
          tipo_usuario,
          password_hash,
          data_nasc: data,
          sexo,
          cor,
        });

        const medico = await Medico.create({
          cpf,
          crm,
          eh_docente,
          titulo_uni,
        });

        medico.addUsuario(usuario);

        return res.json({ result: "Cadastro do medico concluido" });
      }
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }
  },
  async update(req, res) {},
  async destroy(req, res) {
    const cpf = req.id;

    const usuario = await Usuario.destroy({
      where: {
        cpf: cpf,
        tipo_usuario: "M",
      },
    });
    await Medico.destroy({
      where: {
        cpf: cpf,
      },
    });
    if (usuario == 1) {
      return res.json("Usuario Removido");
    } else if (usuario == 0) {
      return res.json("Usuario não encontrado");
    }
  },
};
