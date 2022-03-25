const Bill = require('../models/Bill')
const { StatusCodes } = require('http-status-codes')

// CREATE Bill
const createBill = async (req, res) => {
  try {
    const newBill = await Bill.create(req.body)
    res.status(StatusCodes.CREATED).json(newBill)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

//GET ALL BILLS
const getBill = async (req, res) => {
  try {
    const allBills = await Bill.find({})
    res.status(StatusCodes.OK).json(allBills)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

// DELETE Bill
const deleteBill = async (req, res) => {
  try {
    await Bill.findByIdAndRemove(req.params.id)
    res.status(StatusCodes.OK).json('Bill has been deleted')
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

// UPDATE Bill
const updateBill = async (req, res) => {
  try {
    const updatedBill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(StatusCodes.OK).json(updatedBill)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

module.exports = {
  createBill,
  getBill,
  deleteBill,
  updateBill,
}
