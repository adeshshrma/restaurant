const Items = require('../models/Items')
const { StatusCodes } = require('http-status-codes')

// CREATE Item
const createItem = async (req, res) => {
  try {
    const newItem = await Items.create(req.body)
    res.status(StatusCodes.CREATED).json(newItem)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

//GET ALL ITEMS
const getItems = async (req, res) => {
  try {
    const allItems = await Items.find({})
    res.status(StatusCodes.OK).json(allItems)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

// DELETE ITEM
const deleteItem = async (req, res) => {
  try {
    await Items.findByIdAndRemove(req.params.id)
    res.status(StatusCodes.OK).json('Item has been deleted')
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

// UPDATE ITEM
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(StatusCodes.OK).json(updatedItem)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

// SINGLE ITEM
const getItem = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id)
    res.status(StatusCodes.OK).json(item)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong')
  }
}

module.exports = {
  createItem,
  getItems,
  deleteItem,
  updateItem,
  getItem,
}
