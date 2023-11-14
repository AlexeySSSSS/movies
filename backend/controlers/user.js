const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((user) => res.status(200).send(user))
    .catch((err) => res.send({ message: err.message }));
};

module.exports.getUsersId = (req, res, next) => {
  const { id } = req.params;
  return User.findById(id)
    .then((user) => res.status(200).send(user))
    .catch((err) => res.send({ message: err.message }));
};

module.exports.patchUsersId = (req, res, next) => {
  const { id } = req.params;
  const { email, name } = req.body;
  return User.findByIdAndUpdate(id, { email, name })
    .then((user) => res.status(200).send(user))
    .catch((err) => res.send({ message: err.message }));
};

module.exports.getUsersMe = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).send({ user }))
    .catch((err) => res.send({ message: err.message }));
};

module.exports.createUser = (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        name,
        email,
        password: hash,
      })
    )
    .then((user) =>
      res.send({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    )
    .catch((err) => res.send({ message: err.message }));
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, "some-secret-key", {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};
