const express = require("express");
const ENV = require("./utils/env");
const connectToDB = require("./config/db");

const app = express();
const PORT = ENV.PORT;

// Connect to the database
connectToDB();

//Middleware to parse JSON bodies
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
