const loginModel = require('../model/login');

async function auth (req, res, next) {
  const authHeader = req.cookies.Authorization;

  if (!authHeader) {
    return res.status(401).send({
      message: 'Unauhtorized!',
    });
  }

  const user = await loginModel.findOne({ where: { loginId: authHeader } })

  req.user = {
    userId: user.loginId,
    userEmail: user.emailCliente
  }

  res.cookie('Authorization', authHeader)
  console.log('User authenticated', req.user);
  next()
}

module.exports = auth;
