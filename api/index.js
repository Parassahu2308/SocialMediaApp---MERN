const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRouters = require("./routes/users");
const postRouters = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(function (db) {
  console.log(" Database is connected");
});

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
//   console.log(" Database is connected");
// });

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

//Routers
app.use("/api/users", userRouters);
app.use("/api/auth", userRouters);
app.use("/api/posts", postRouters);

app.listen(2308, () => {
  console.log("Server at running at port:2308!");
});
