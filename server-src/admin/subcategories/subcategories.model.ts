import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SubCategorySchema = new Schema({
    categoryId: {
        type: Number,
        required: 'Add category id'
    },
    subcategoryname: {
        type: String,
        required: 'Enter a category name'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});