const { Client } = require("pg");
const { database } = require("../database");

// const client = new Client({
//   connectionString: database
// });
// client.connect();

module.exports = {
  async index(req, res) {
    const client = new Client({
      connectionString: database()
    });
    await client.connect();
    console.log(await client.query("SELECT NOW();"));
    return res.json("Usuário cadastrado");
    // const { login, senha, cpf } = req.body;
    // console.log("O login é " + login);
    // console.log("A senha é " + senha);
    // console.log("O cpf é " + cpf);
    // return res.json("Usuário cadastrado");
  }
};
