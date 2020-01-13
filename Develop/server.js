const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.urlencoded({ extended: ture }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
