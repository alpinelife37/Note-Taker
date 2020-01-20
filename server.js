const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
require("./routes/htmlRoute")(app);
