const express = require("express");
const router = express.Router();


const {addProduct,category,productview}=require("../controller/userController")
router.post("/addProduct", addProduct);
router.post("/cat", category);
router.get("/pro", productview);



module.exports = router;
