import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SubCategorySchema = new Schema({
    categoryid: {
        type: String,
        required: 'Category id is required'
    },
    subcategoryname: {
        type: String,
        required: 'Sub Category is required'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});