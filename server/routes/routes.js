const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../handlers/prodHandle");

// ROUTES
router.post("/products/create", async (req, res) => {
  console.log("req.body", req.body);
  await addProduct(req.body);
  res.send({ status: "true", message: "Created Successfully!" });
});

// GET ALL PRODUCTS
router.get("/products", async (req, res) => {
  let products = await getProducts();
  res.send(products);
});

// GET SPECIFIC PRODUCT
router.get("/products/:id", async (req, res) => {
  let products = await getProduct(req.params.id);
  res.send(products);
});

//   UPDATE PRODUCT
router.patch("/products/update/:id", async (req, res) => {
  await updateProduct(req.params.id, req.body);
  res.send({ status: "true", message: "Updated Successfully!" });
});

router.delete("/products/delete/:id", async (req, res) => {
  await deleteProduct(req.params.id);
  res.send({ status: "true", message: "Deleted Successfully!" });
});

module.exports = router;
