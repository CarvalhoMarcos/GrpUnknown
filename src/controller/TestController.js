module.exports = {
  async index(req, res) {
    const { login, senha, cpf } = req.body;
    console.log("O login é " + login);
    console.log("A senha é " + senha);
    console.log("O cpf é " + cpf);
    return res.json("Usuário cadastrado");
  }
};
