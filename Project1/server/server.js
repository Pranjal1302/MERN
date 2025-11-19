// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const MovieRouter = require('./routes/movieroute.js')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/movie',MovieRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

