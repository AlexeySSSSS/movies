const router = require("express").Router();

const {
  getUsers,
  getUsersId,
  getUsersMe,
  patchUsersId,
} = require("../controlers/user");

router.get("/users", getUsers);
router.get("/users/me", getUsersMe);
router.get("/users/:id", getUsersId);
router.patch("/users/:id", patchUsersId);

module.exports = router;
