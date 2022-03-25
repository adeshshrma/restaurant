const router = require('express').Router()
const {
  createItem,
  updateItem,
  getItems,
  deleteItem,
  getItem,
} = require('../controller/items')

router.route('/').post(createItem).get(getItems)
router.route('/:id').delete(deleteItem).put(updateItem).get(getItem)

module.exports = router
