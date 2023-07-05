const RelatoriosController = {
  async render(req, res) {
    const user = req.user;
    try {
      res.render('relatorios', {
        user
      }) 
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
  }
}

module.exports = RelatoriosController;
