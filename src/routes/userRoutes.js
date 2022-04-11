const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const controller = require("../controllers/userController"); 
// ISSO AI TBM É ESQUELETO?

router.get("/all", controller.getAll); //usuario digitou e pega os itens
router.post("/create", controller.createUser)


module.exports = router