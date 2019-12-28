import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
    id: {
        type: Number,
        required: 'Enter a OrderId'
    },
    userid:{
        type: Number,
        required: 'Enter a UserId'
    },
    productid:{
        type: Number,
        required: 'Enter a ProductId'
    },
    quantity: {
        type: Number,
        required: 'Select Quantity'
    },
    mobile:{
        type: Number,
        required: 'Enter a Mobile Number'
    },
    email:{
        type: Number,
        required: 'Enter a Email' 
    },
    address:{
        type: Number,
        required: 'Enter a AddressDetails' 
    },
    orderstatus: {
        type: Number,
        required: 'Enter a Order Status'
    },
    paymentstatus:{
        type: Number,
        required: 'Enter a Payment Status'
    },
    ipaddress:{
        type: Number,
        required: 'Enter a IPAddress' 
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    date_updated: {
        type: Date,
        default: Date.now
    }
});