const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars")
const session = require("express-session");
const routers = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();