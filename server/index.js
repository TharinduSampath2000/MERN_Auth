import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "dist", "index.html")));
} else {
  app.get("/", (req, res) => res.send("Server is ready!"));
}
  
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}\nVisit: http://localhost:${PORT}`);
});
