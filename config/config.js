require("dotenv").config();

module.exports = {
  DB_HOST: process.env.MYSQL_HOST,
  BASE_URL: process.env.BASE_URL,
}