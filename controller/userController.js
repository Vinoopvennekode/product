const productModel = require("../model/productModel");
const categoryModel = require("../model/categories");

const addProduct = async (req, res) => {
  // ADD PRODUCTS
  try {
    const { title, price, category } = req.body;

    console.log(req.body);
    const newProduct = new productModel({
      title: title,
      category: category,
      price: price,
    });
    await newProduct.save();
    console.log(newProduct);
  } catch (error) {
    res.status(404).json({ error: "page not found" });
  }
};

const category = async (req, res) => {
  const { cat, des } = req.body;

  console.log(req.body);
  const cate = new categoryModel({
    name: cat,
    discription: des,
  });
  await cate.save();
  console.log(cate);
};

const productview = async (req, res) => {
  const product = productModel
    .find()
    .populate("category")
    .then((res) => {
      console.log(res[0].category.discription);
    });
};
module.exports = { addProduct, category, productview };
