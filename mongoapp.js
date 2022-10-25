const express = require("express");
const bodyParser = require("body-parser");

const mongoController = require("./mongo");

const mongoapp = express();

mongoapp.use(bodyParser.json());

mongoapp.post("/products", mongoController.createProduct);

mongoapp.get("/products");

mongoapp.listen(3000);
