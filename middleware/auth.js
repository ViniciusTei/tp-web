function auth (req, res, next) {
  const authHeader = req.cookies.Authorization;

  if (!authHeader) {
    return res.status(401).send({
      message: 'Unauhtorized!',
    });
  }

  req.userId = authHeader
  res.cookie('Authorization', authHeader)
  console.log('User authenticated', authHeader);
  next()
}

module.exports = auth;
