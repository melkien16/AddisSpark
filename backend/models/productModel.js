import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: "string",
    required: true,
  },
  rating: {
    type: "number",
    required: true,
  },
  comment: {
    type: "string",
    required: true,
  },
}, {
  timestamps: true,
})

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    brand: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    review: [reviewSchema],
    rating: {
      type: "number",
      required: true,
      default: 0,
    },
    numReviews: {
      type: "number",
      required: true,
      default: 0,
    },
    price: {
      type: "number",
      required: true,
      default: 0,
    },
    countInStock: {
      type: "number",
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", productSchema);
export default Product;