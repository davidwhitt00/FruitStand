const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
require("./controllers")(app)
require("./models")
require("./config/associations")


app.listen(3000,() => {
    console.log("Port 3000 active")


})