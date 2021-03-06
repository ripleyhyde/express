const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const ProductSchema = new mongoose.Schema(
  {
    id: Number,
    name: { type: String, required: true },
    slug: String,
    image: String,
    description: String,
    color: String,
    quantity: { type: Number, min: 0 },
    price: { type: Number, default: 1 },
  },
  { timestamps: true }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Product", ProductSchema);
