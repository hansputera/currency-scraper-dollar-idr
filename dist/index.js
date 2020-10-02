"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Library config
const dotenv_1 = require("dotenv");
const Api_1 = require("./src/api/Api");
// .env config
dotenv_1.config();
// API running
Api_1.init();
