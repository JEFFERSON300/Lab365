const express = require("express");

const app = express();
const port = 3333;

app.use(require("./controler"));
app.use(express.json());

app.listen(port, () => console.log("listening on port"));
