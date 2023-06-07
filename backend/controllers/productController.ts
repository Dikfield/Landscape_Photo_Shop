import asyncHandler from '../middleware/asyncHandler';
import Product from '../models/productModel';

const getProducts = asyncHandler(
  async (req: any, res: any) => {
    const products = await Product.find({});
    res.json(products);
  },
);

const getProductById = asyncHandler(
  async (req: any, res: any) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.json(product);
    } else {
      res.status(404);
      throw new Error('Resource not found');
    }
  },
);

export { getProducts, getProductById };
