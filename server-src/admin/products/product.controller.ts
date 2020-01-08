import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { ProductSchema } from './product.model';

const Product = mongoose.model('products', ProductSchema);

class ProductController {

    public post(req: Request, res: Response) {
        let product = req.body;
        let newProduct = new Product({
            categoryid : product.categoryid,
            subcategoryid: product.subcategoryid,
            subchildcategoryid: product.subchildcategoryid,
            title: product.title,
            subtitle: product.subtitle,
            price: product.price,
            quantity: product.quantity,
            measurements: product.measurements,
            description: product.description,
            created_date: product.createddate,
            updated_date: product.updateddate
        });

        newProduct.save((err, response) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json({
                status: 200,
                data: response
            });
        });
    }

    // public get(req: Request, res: Response) {
    //     Product.find((err, products) => {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.status(200).json({
    //             status: 200,
    //             data: products
    //         });
    //     });
    // }

    public getProducts(req: Request, res: Response) {
        Product.find(req.body , function (err, data) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: data
            });
        });
    }

    public update(req: Request, res: Response) {
        Product.findOneAndUpdate({ _id: req.params.id }, {
            $set: req.body
        }, { useFindAndModify: false }, function (err, data) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: data
            });
        });
    }

    public delete(req: Request, res: Response) {
        Product.findByIdAndRemove(req.params.id, function (err, data) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: data
            });
        });
    }

}

export default new ProductController();