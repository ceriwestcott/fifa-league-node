// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const mongoString = process.env.DATABASE_URL;

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on("error", (error) => {
//   console.log(error);
// });

// database.once("connected", () => {
//   console.log("Database Connected");
// });
// const app = express();

// app.listen(3000, () => {
//   console.log(`Server Started at ${3000}`);
// });

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fifaRoutes from "./routes/routes";
import bodyParser from "body-parser";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error: Error) => {
  
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(bodyParser.json());
app.use("/fifa", fifaRoutes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
