// controller functions - CRUD
const Product = require('../models/product-model')
// Add new product
const addProduct = async (req, res) => {
  try {
    const reqProductData = req.body
    const newProduct = await Product.create(reqProductData)
    if (newProduct) {
      res.status(201).json(
        {
          success: true,
          message: 'product added successfully.',
          data: newProduct
        }
      )
    } else {
      res.status(400).json({
        success: false,
        message: 'failed to add product, invalid data.'

      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}

// List all products
const getAllProduct = async (req, res) => {
  try {
    const allProductList = await Product.find()
    if (allProductList) {
      res.status(200).json({
        success: true,
        message: 'Successfully get all the produces.',
        data: allProductList

      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No product found'

      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}
// Query a specific product by id
const getOneProduct = async (req, res) => {
  try {
    const reqID = req.params.id
    const specificProduct = await Product.findById(reqID)
    if (specificProduct) {
      res.status(200).json({
        success: true,
        message: 'Found product successfully',
        data: specificProduct
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No product found'

      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}
// Update a product by id
const updateProduct = async (req, res) => {
  try {
    const reqID = req.params.id
    const reqUpdateData = req.body
    const updateProduct = await Product.findByIdAndUpdate(reqID, reqUpdateData, { new: true })
    if (updateProduct) {
      res.status(200).json({
        success: true,
        message: 'product is updated successfully',
        data: updateProduct
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No product found, please check the ID'

      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}

// update a product Tag by ID - adding new tags to the tag array
const addingProductTags = async (req, res) => {
  try {
    const reqID = req.params.id
    const { tags } = req.body // object destructuring:pulls the tags property out of the incoming body and puts it into its own tags variable
    const tagUpdatedProduct = await Product.findByIdAndUpdate(reqID,
      { $addToSet: { tags: { $each: tags } } }, { new: true, runValidators: true })
    // $addToSet: Adds a value to an array only if that value isn’t already present
    // $each: Used inside either $addToSet or $push to operate on multiple values in one go
    if (tagUpdatedProduct) {
      res.status(200).json({
        success: true,
        message: 'Tags are added successfully',
        data: tagUpdatedProduct
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No product found, please check the ID'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}

// Delete a product by id
const deleteProduct = async (req, res) => {
  try {
    const reqID = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(reqID)
    if (deletedProduct) {
      res.status(200).json({
        success: true,
        message: 'product is deleted successfully',
        data: deletedProduct
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No product found, please check the ID'

      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}
// query all Fruits
const getFruits = async (req, res) => {
  try {
    const allFruit = await Product.find({
      category: 'Fruit'
    }).select('name price -_id').sort({ price: 1 })
    // 筛选Fruit category并且仅显示name，price in ascending order
    if (allFruit) {
      res.status(200).json({
        success: true,
        message: 'Successfully get all products in Fruit catagory.',
        data: allFruit
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No fruit found'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}

module.exports = { addProduct, getAllProduct, getOneProduct, updateProduct, deleteProduct, addingProductTags, getFruits }
