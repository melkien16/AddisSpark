import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import ProductRouter from "./routes/ProductRoutes.js";
import UserRouter from "./routes/userRoutes.js";
import OrderRouter from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

import connectDb from "./config/db.js";

const PORT = process.env.PORT || 5000;

connectDb();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (_, res) => {
  res.send("API is running...");
});

app.use("/api/products", ProductRouter);
app.use("/api/users", UserRouter);
app.use("/api/orders", OrderRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
