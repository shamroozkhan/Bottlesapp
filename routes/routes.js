const router = require('express').Router();

const BottlesController = require("../controllers/BottlesController")




router.use("/", BottlesController.GetBottles);


module.exports = router;
