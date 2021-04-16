const express = require("express");
//const bodyParser = require("body-parser"); deprecated wyjebac
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config");

const app = express();


app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

sequelize.sync()
    .then(()=>{
        app.listen(config.PORT);
        console.log(`[*] Serwer nasłuchuje na porcie ${config.PORT}`)
    })

require("./routes")(app)