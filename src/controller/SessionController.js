const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
module.exports ={
  async login(req,res){
    const {cpf,password} = req.body;

    const usuario = await Usuario.findOne({where:{
      cpf: cpf}});
    
    if(usuario != undefined){
     if(await bcrypt.compare(password, usuario.password_hash)) {
       return res.json(usuario);
     }
     else{
      return res.status(400).json("Wrong password");
     }
  }
  else{
      return res.json("User not found");
    }
  }
}