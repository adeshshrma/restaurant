const mongoose = require('mongoose')

const ItemsShema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    img: { type: String },
    desc: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Items', ItemsShema)
