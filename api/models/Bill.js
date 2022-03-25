const mongoose = require('mongoose')

const BillsShema = new mongoose.Schema(
  {
    custName: { type: String, required: true },
    subTotal: { type: Number, required: true },
    tip: { type: Number },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Bill', BillsShema)
