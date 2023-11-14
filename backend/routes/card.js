const router = require("express").Router();

const {
  getCards,
  createCards,
  getCardsId,
  cardsDelete,
} = require("../controlers/card");

router.get("/cards", getCards);
router.get("/cards/:id", getCardsId);
router.post("/cards", createCards);
router.delete("/cards/:id", cardsDelete);

module.exports = router;
