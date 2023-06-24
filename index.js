const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require('./routes');
const pages = require("./pages");
require('./database');

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.set('view engine', 'ejs');

// Handle every app page
app.use(pages);

// Handle every api route
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})