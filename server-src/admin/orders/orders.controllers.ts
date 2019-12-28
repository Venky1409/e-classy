import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { OrderSchema } from './orders.model';

const Order = mongoose.model('orders', OrderSchema);

class CategoryController {

    public getOrders(req: Request, res: Response) {
        console.log(req.params.id);
        if( req.params.id !== undefined ){
            console.log("id here");
            Order.findById( req.params.id).exec((err, orders) => {
                if (err) {
                   return res.send(err);
                }
                res.status(200).json({
                    status: 200,
                    data: orders
                });
            });
        } else {
            console.log("id not here");
            Order.find((err, orders) => {
                if (err) {
                    res.send(err);
                }
                res.status(200).json({
                    status: 200,
                    data: orders
                });
            });
        }
        
    }

    public testCats(req: Request, res: Response) {
        res.json({
            categories: [{
                id: 1,
                name: 'Mobile Covers'
            }]
        });
    }
}

export default new CategoryController();