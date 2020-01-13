const express = require("express");
const app = express();
const PORT = 4000;
require("./routes/postRoute")(app);
require("./routes/getRoute")(app);
require("./routes/htmlRoute")(app);
require("./routes/deleteRoute")(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
