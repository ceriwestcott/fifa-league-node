import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import jwtRouter from "./routes/jwt-routes";
import getRoutes from "./routes/getRoutes";
import deleteRoutes from "./routes/deleteRoutes";
import postRoutes from "./routes/postRoutes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error: Error) => {
  console.error("Error connecting to database", error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(bodyParser.json());
app.use("/get", getRoutes);
app.use("/delete", deleteRoutes);
app.use("/post", postRoutes);
app.use("/iam", jwtRouter);

app.listen(port, () => {
  console.log(process.env.DATABASE_URL);
  console.log(`Server started at ${port}`);
});
