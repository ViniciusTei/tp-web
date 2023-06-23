const connection = require('../database');

const LoginModel = {
  login(useremail, passowrd) {
    const db = connection.getDb()
    db.query(`select * from login where emailCliente = '${useremail}'`, (err, rows, fields) => {
      if (err) throw err
    
      console.log('The solution is: ', rows)
    })
  },
  register(useremail, password) {
    try {
      const db = connection.getDb()
      const results = db.query(`select * from login where emailCliente = '${useremail}'`)
      
      if (!results.length) {
        throw new Error('User already exists!');
      }
  
      const record = db.query(`INSERT INTO login(loginId, emailCliente, senhaCliente, nivelAcesso) VALUES ('','${useremail}','${password}', '1')")`)
        
      return record[0]

    } catch (error) {
      throw new Error(error)
    }
  
  }
}

module.exports = LoginModel;
