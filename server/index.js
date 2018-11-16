const express = require("express");
const app = express();

app.use(express.static(__dirname + "./../build"));

app.listen(3013, () => console.log("listening on port 3013"));
