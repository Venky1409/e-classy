import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SubChildCategorySchema = new Schema({
    subcategoryid: {
        type: String,
        required: 'SubCategoryId is required'
    },
    subchildcategoryname: {
        type: String,
        required: 'Subchildcategory name is required'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});