const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = {
  async login(req, res) {
    const { cpf, password } = req.body;

    const usuario = await Usuario.findOne({
      where: {
        cpf: cpf,
      },
    });

    if (usuario != undefined) {
      if (await bcrypt.compare(password, usuario.password_hash)) {
        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
          subject: usuario.cpf.toString(),
          expiresIn,
        });
        delete usuario.dataValues.password_hash;

        return res.json({ usuario, token });
      } else {
        return res.status(400).json("Wrong password");
      }
    } else {
      return res.json("User not found");
    }
  },
};
