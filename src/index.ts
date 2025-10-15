import * as dotenv from "dotenv";

const result = dotenv.config();

if(result.error){
  console.log(result.error.message);
}

import * as express from "express";
import {normalize} from "./utils/port";

const app = express();

app.use("/", (req, res) => {
  res.json("Backend solution for Bookmark Manager from FrontEnd Mentor by Dirk Brandon Lapitan...");
});

const PORT = normalize(process.env.PORT);
app.listen(PORT, () => {
  console.log(`Serving at PORT ${PORT}...`);
});