import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { CategorySchema } from './categories.model';

const Category = mongoose.model('categories', CategorySchema);

class CategoryController {

    public addNewCategory(req: Request, res: Response) {
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

    public getAllCategories(req: Request, res: Response) {
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