import app from "./app";
import "./database";

const SERVER_PORT = app.get("port");

app.listen(SERVER_PORT);
console.log("Server is up in port ", SERVER_PORT);
