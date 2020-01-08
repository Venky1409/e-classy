import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    categoryid: {
        type: String,
        required: 'Enter a category name'
    },
    subcategoryid: {
        type: String,
        required: 'Enter a subcategory name'
    },
    subchildcategoryid: {
        type: String
    },
    title: {
        type: String,
        required: 'Enter title'
    },
    subtitle: {
        type: String
    },
    price: {
        type: Number,
        required: 'Enter price'
    },
    quantity: {
        type: Number
    },
    measurements: {
        type: String
    },
    // images: {
    //     type: String,
    //     required: 'Enter a category name'
    // },
    description: {
        type: String,
        required: 'Enter description'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

