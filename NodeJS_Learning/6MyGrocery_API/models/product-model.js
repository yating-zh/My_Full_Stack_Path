const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: [30, 'product name is limited to 30 character'] },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0, min: [0, 'stock must be greater than 0'] },
  onSale: { type: Boolean, default: false },
  tags: [String],
  createAt: { type: Date, default: Date.now }
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
