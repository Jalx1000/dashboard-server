import ProductStat from "../models/ProductStat.js";
import Product from "./../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productswithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productswithStats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
