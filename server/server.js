import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./DB/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.route.js";
import NotesRoute from "./Routes/Notes.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen("5000", () => {
  connectDB();
  console.log("running");
});

app.use("/api/users/auth", authRoutes);
app.use("/api/users/notes", NotesRoute);

app.get("/", (req, res) => {
  res.send("hii");
});
