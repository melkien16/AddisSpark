import express from "express";
import dotenv from "dotenv";

import ProductRouter from "./routes/ProductRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

import connectDb from "./config/db.js";

const PORT = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("API is running...");
});

app.use("/api/products", ProductRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
