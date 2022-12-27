
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
name:{
    type: String,
    required: [true, 'please enter product name'],
    trim: true,
    maxLength:[100, 'product name cannot exceeds 100 character']
},
price:{
    type: Number,
    required: [true, 'please enter product price'],
    trim: true,
    maxLength:[5, 'product name cannot exceeds 15 character'],
    default: 0.0
},
description:{
    type: String,
    required: [true, 'please enter product description'],
},

rating:{
    type: Number,
    default: 0.0
},
images:[
    {
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        },

    }
],

category:{
    type: String,
    required: [true, 'please enter category for this product'],
    enum:{
        values:[
            'Electronics',
            'Cameras',
            'Accessories',
            'HeadPhones',
             'Food'
        ],
        message: 'please select correct category fo this product'
    }
},
seller:{
    type: String,
    required: [true, 'please enter product seller']
},
stock:{
    type: Number,
    required: [true, 'please enter product seller'],
    maxLength: [5,'Product name cannot exceed 5 characters'],
    default: 0
},
numOfReviews:{
    type: Number,
    default: 0
},

reviews:[
    {
        name:{
            type: String,
            required: true
        },

    rating:{
        type: Number,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
}
],
createdAt:{
    type: Date,
    default:Date.now
}


})


module.exports = mongoose.model('product', productSchema)