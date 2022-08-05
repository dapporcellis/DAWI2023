
async function abreTela(req, res) {
  res.render("login/login.ejs");
}

async function cadastro(req, res) {
    res.render("login/cadastro.ejs");
}


module.exports = { abreTela, cadastro };
