import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema = new Schema({
    categoryname: {
        type: String,
        required: 'Enter a category name'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});