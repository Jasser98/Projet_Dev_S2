require('dotenv').config(); //import file .env
const http = require("http");
const app = require('./index') //import index.js
const server = http.createServer(app);
server.listen(process.env.PORT); //import pour traiter .env