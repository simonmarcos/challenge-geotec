import mongoose from "mongoose";
import config from "./config/config";

mongoose.set("strictQuery", true);
mongoose.connect(config.DB.URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connection to mongodb is up");
});

connection.on("error", () => {
  console.log("Connection to mongodb is down");
});
