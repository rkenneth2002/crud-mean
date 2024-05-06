const Product = require("../db/product");

// ADD PRODUCTS
const addProduct = async (prodModel) => {
  let product = new Product({
    ...prodModel,
  });

  await product.save();
  return product.toObject();
};

// GET PRODUCTS
const getProducts = async () => {
  const products = await Product.find();

  return products.map((x) => x.toObject());
};

// GET SPECIFIC PRODUCT
const getProduct = async (id) => {
  const product = await Product.findById(id);

  return product.toObject();
};

// UPDATE PRODUCTS
const updateProduct = async (id, prodModel) => {
  const filter = { _id: id };
  await Product.findOneAndUpdate(filter, prodModel);
};

// DELETE PRODUCTS
const deleteProduct = async (id) => {
  const filter = { _id: id };
  await Product.findOneAndDelete(filter);
};

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
