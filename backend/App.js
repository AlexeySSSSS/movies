const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/user");
const cards = require("./routes/card");
const cors = require("./middlewares/cors");

const { createUser, login } = require("./controlers/user");

const auth = require("./middlewares/auth");

const { PORT = 4001 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);

app.post("/sign-up", createUser);
app.post("/sign-in", login);

app.use(auth);
app.use(users);
app.use(cards);

mongoose.connect("mongodb://127.0.0.1/moviesdb", {
  useNewUrlParser: true,
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
