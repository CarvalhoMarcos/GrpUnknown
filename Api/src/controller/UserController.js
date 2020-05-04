const Usuario = require("../models/Usuario");
const Residente = require("../models/Residente");
const bcrypt = require("bcryptjs");
const Medico = require("../models/Medico");
module.exports={
    async index(req,res){
      const {id} = req.params;
      if(id ==undefined){
        const usuarios = await Usuario.findAll({attributes: ["nome", "cpf","email","tipo_usuario"]});

        return res.status(200).json(usuarios);
      }
      else{
        const usuarios = await Usuario.findAll({attributes: ["nome", "cpf","email","tipo_usuario"],where:{
          cpf: id}});

        return res.status(200).json(usuarios);
      }

    },

  async store(req,res){
    console.log(req.body);
    const {cpf,nome,email,tipo_usuario,password,sexo,cor} = req.body;

    try{
    const password_hash = await bcrypt.hash(password, 8);   

    // const user = await Usuario.findByPk(cpf);
    // console.log(user);
    const usuario_existe = await Usuario.findOne({where:{
      cpf:cpf,
      tipo_usuario:tipo_usuario
    }});

    
    if (usuario_existe) {
      res.status(400).json({ error: "Usuario ja cadastrado" });
    }
    else{
    await Usuario.create({ cpf, nome, email, tipo_usuario, password_hash ,sexo, cor });
    
    return res.json({result:"Cadastro executado"});
  }
  }
  catch(err){
    return res.json({error: err});
  }
  },
  async update(req,res){

  },
  async destroy(req,res){
    const auth = req.headers.authorization;
    const {cpf,tipo_usuario} = req.params;
   
    if(auth=="root" || auth ==cpf){
      const usuario = await Usuario.destroy({where:{
        cpf:cpf,
        tipo_usuario:tipo_usuario
      }})
      if(tipo_usuario =="M"){
        await Medico.destroy({where:{
          cpf:cpf
        }})
      }
      if(tipo_usuario =="R"){
        await Residente.destroy({where:{
          cpf:cpf
        }})
      }
      if(usuario==1){
        return res.json("Usuario Removido");
      }
      else if(usuario == 0){
        return res.json("Usuario não encontrado");
      }
      return res.json("ERRO, VERIFICAR")
    }
    else{
      return res.status(405).json({result: "Operação não permitida"});
    }



    
  }
}