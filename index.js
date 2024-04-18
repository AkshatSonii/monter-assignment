const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data
app.use(cors());




const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);