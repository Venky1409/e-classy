import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { CategorySchema } from './categories.model';

const Category = mongoose.model('Category', CategorySchema);

class CategoryController {

    public addNewCategory(req: Request, res: Response) {
        let newCategory = new Category(req.body);

        newCategory.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getAllCategories(req: Request, res: Response) {
        Category.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({

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