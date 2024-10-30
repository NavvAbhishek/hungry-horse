import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { foodRouter, userRouter, cartRouter,orderRouter } from "./routes/index.js";
import dotenv from 'dotenv';
dotenv.config();

//? App config
const app = express();
const port = 4000;

//? middleware
app.use(express.json());
app.use(cors());

//? db connection
connectDB();

//? Api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
  res.send("API WORKING...");
});

app.listen(port, () => {
  console.log("Server started... ");
});
