import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see the app`);
});