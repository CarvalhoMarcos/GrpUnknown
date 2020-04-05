const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
module.exports={
  async store(req,res){
    console.log(req.body);
    const {cpf,nome,email,tipo_usuario,password,sexo,cor} = req.body;

    const password_hash = await bcrypt.hash(password, 8);   
    console.log(password);
    console.log(password_hash);
    // const user = await Usuario.findByPk(cpf);
    // console.log(user);
    const usuario_existe = await Usuario.findOne({where:{
      cpf:cpf,
      tipo_usuario:tipo_usuario
    }});

    
    if (usuario_existe) {
      res.status(400).json({ error: "Usuario ja cadastrado" });
    }

    await Usuario.create({ cpf, nome, email, tipo_usuario, password_hash ,sexo, cor });
    
    return res.json({result:"Cadastro executado"});
  }
}