"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const SERVER_PORT = app_1.default.get("port");
app_1.default.listen(SERVER_PORT);
console.log("Server is up in port ", SERVER_PORT);
