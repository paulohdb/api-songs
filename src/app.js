import express from "express";
import connectDb from "./config/dbConnect.js";
import routes from "./routes/index.js";


const connection = await connectDb();

connection.on("error", (erro) => {
  console.error("error connection", erro)
})
connection.once("open", () => {
  console.log("DB connection ok")
})

const app = express();
routes(app);

export default app;

