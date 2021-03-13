const express = require("express");
require("dotenv").config();
const connectDB =require("./config/connectDB")

const app = express();
connectDB();
app.use(express.json());
app.use("/api/userSocietes",require("./routes/contacts"));
const PORT=process.env.PORT;

app.listen(PORT, (err) =>
err ? console.error(err) : console.log("server is running")

); 