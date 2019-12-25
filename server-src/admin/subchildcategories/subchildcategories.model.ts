import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SubChildCategorySchema = new Schema({
    categoryId: {
        type: Number
    },
    subcategoryId: {
        type: Number
    },
    subchildcategoryname: {
        type: String,
        required: 'Enter a category name'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});