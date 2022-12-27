
 const product = require('../models/product');
 const ErrorHandler = require('../utils/errorHandler');
 const catchAsyncErrors = require('../middlewares/catchAssyncError');
 const APIFeatures = require('../utils/apiFeatures')


 // create a single product 
 exports.newProduct = catchAsyncErrors(async (req, res, next)=>{
  
    const product = await product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
     })

    //  get all products
  exports.getProducts = catchAsyncErrors( async (req, res, next)=>{

    const resPerPage = 4; 
    const productCount = await product.countDocuments()

    const apiFeatures = new APIFeatures(product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage)

    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: products.length,
        productCount,
        products
    })
  })
     
// get single product

exports.getSingleProduct = catchAsyncErrors(async(req, res, next)=>{
  const product = await Product.findById(req.params.id);
  if(!product){
     return next (new ErrorHandler('Product not Found', 404));
  }
  res.status(200).json({
    success:true,
    product
  })
})
//  Update product
exports.updateProduct = catchAsyncErrors(async(req, res, next)=>{
  let product = await Product.findById(req.params.id); // let is used for reassigning
  if(!product){
    return res.status(404).json({
      success:false,
      message: "Product not found"
    })
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    runValidators:true,
    useFindAndModify:false
  });
  res.send(200).json({
    success:true,
    product
  })
})
// Delete Product

 exports.deleteProduct = catchAsyncErrors(async(req, res, next)=>{
     const product = await Product.findById(req.params.id);
     if(!product){
         return res.status(404).json({
             success:false,
             message: "Product not found"
         })
     }
     await product.remove();
     res.status(200).json({
         success: true,
         message: 'Product is deleted'
     })
 })


