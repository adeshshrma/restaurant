const router = require('express').Router()
const {
  createBill,
  updateBill,
  getBill,
  deleteBill,
} = require('../controller/bill')

router.route('/').post(createBill).get(getBill)
router.route('/:id').delete(deleteBill).put(updateBill)

module.exports = router
