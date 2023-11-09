import mongoose from "mongoose";

const itemsListSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductList = mongoose.model('Products',itemsListSchema)
export default ProductList;