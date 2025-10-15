import * as dotenv from "dotenv";

const result = dotenv.config();

if(result.error){
  console.log(result.error.message);
}

import * as express from "express";
import { normalize } from "./utils/port";
import { connect, connection } from "mongoose";

const DB = process.env.DB;
const app = express();

connect(DB).catch(error => {
  console.log(error);
});
connection.on("connected", () => console.log("Successfully connected to MongoDB..."));

app.use("/", (req, res) => {
  res.json("Backend solution for Bookmark Manager from FrontEnd Mentor by Dirk Brandon Lapitan...");
});

const PORT = normalize(process.env.PORT);
app.listen(PORT, () => {
  console.log(`Serving at PORT ${PORT}...`);
});