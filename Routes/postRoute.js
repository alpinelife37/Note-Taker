fs = require("fs");

module.exports = app => {
  app.post("/api/notes", function(req, res) {
    let newArray = [];
    const notesDataBase = fs.readFileSync("./db/db.json");
    if (notesDataBase.length > 0) {
      newArray = JSON.parse(notesDataBase);
    }
    const newNote = {
      id: newArray.length + 1,
      title: req.body.title,
      text: req.body.text
    };
    newArray.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(newArray), () => {
      console.log("wrote new note to DataBase");
    });
    res.json(newNote);
  });
};
