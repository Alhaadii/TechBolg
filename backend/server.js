import express from "express";
const app = express();
import authRoutes from "./Routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();


// Routes
app.use("/api/auth", authRoutes);


// Server initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see the app`);
});