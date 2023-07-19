import mongoose from 'mongoose';

const reviewSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types
          .ObjectId,
        required: true,
        ref: 'User',
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
      comment: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  );

const productSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types
          .ObjectId,
        required: true,
        ref: 'User',
      },
      name: {
        type: String,
        required: true,
      },
      imageSmall: {
        type: String,
        required: true,
      },
      imageMedium: {
        type: String,
        required: true,
      },
      imageLarge: {
        type: String,
        required: true,
      },
      imageWatermark: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      tags: {
        type: String,
        required: true,
      },
      reviews: [reviewSchema],
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
      numReviews: {
        type: Number,
        required: true,
        default: 0,
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
      countInStock: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    { timestamps: true },
  );

const Product = mongoose.model(
  'Product',
  productSchema,
);

export default Product;
