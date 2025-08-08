const express = require('express')
const router = express.Router()
const { addProduct, getAllProduct, getOneProduct, updateProduct, deleteProduct, addingProductTags, getFruits } = require('../controller/controller')

// CRUD API
router.post('/add', addProduct)
router.get('/get', getAllProduct)
router.get('/get/:id', getOneProduct)
router.get('/category/fruit', getFruits)
router.put('/update/:id', updateProduct)
router.put('/tags/:id', addingProductTags)
router.delete('/delete/:id', deleteProduct)

// Export
module.exports = router
