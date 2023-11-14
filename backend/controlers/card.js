const Card = require("../models/card");

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((card) => res.status(200).send(card))
    .catch((err) => res.send({ message: err.message }));
};

module.exports.getCardsId = (req, res, next) => {
  const { id } = req.params;
  return Card.find({ owner: id })
    .then((Card) => res.status(200).send(Card))
    .catch((err) => res.send({ message: err.message }));
};

module.exports.cardsDelete = (req, res, next) => {
  const { id } = req.params;
  return Card.findOneAndRemove({ id: id })
    .then((card) => res.send(card))
    .catch((err) => res.send({ message: err.message }));
};

module.exports.createCards = (req, res, next) => {
  const { id, text, time, link, img } = req.body;
  const owner = req.user._id;
  return Card.create({ id, text, time, link, img, owner })
    .then((card) => res.status(200).send(card))
    .catch((err) => res.send({ message: err.message }));
};
