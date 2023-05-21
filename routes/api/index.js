const router = require("express").Router();
const courseRoutes = require("./userRoutes");
const studentRoutes = require("./postRoutes");

router.use("/users", userRoutes);
router.use("/posts", postroutes);

module.exports = router;
