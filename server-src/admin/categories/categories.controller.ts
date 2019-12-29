import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { CategorySchema } from './categories.model';

const Category = mongoose.model('categories', CategorySchema);

class CategoryController {

    public post(req: Request, res: Response) {
        let category = req.body;
        let newCategory = new Category({
            categoryname: category.categoryname
        });

        newCategory.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public get(req: Request, res: Response) {
        Category.find((err, categories) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json({
                status: 200,
                data: categories
            });
        });
    }

    public findById(req: Request, res: Response) {
        Category.findById(req.params.id, function (err, data) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: data
            });
        });
    }

    public update(req: Request, res: Response) {
        Category.findOneAndUpdate({ _id: req.params.id }, {
            $set: req.body
        }, { useFindAndModify: false }, function (err, post) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: post
            });
        });
    }

    public delete(req: Request, res: Response) {
        Category.findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: post
            });
        });
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