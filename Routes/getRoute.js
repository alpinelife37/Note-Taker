const fs = require("fs");
const path = require("path");
module.exports = app => {
  app.get("/api/notes", function(reg, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });
};
