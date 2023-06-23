const path = require("path");
const express = require("express");
const cors = require("cors");
const router = require('./routes');
const pages = require("./pages");

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.set('view engine', 'ejs');

// Handle every app page
app.use(pages);

// Handle every api route
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})