import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { SubCategorySchema } from './subcategories.model';

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

class SubCategoryController {

    public addNewSubCategory(req: Request, res: Response) {
        let newSubCategory = new SubCategory(req.body);

        newSubCategory.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getAllCategories(req: Request, res: Response) {
        SubCategory.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({

            });
        });
    }

    public testCats(req: Request, res: Response) {
        res.json({
            subcategories: [{
                id: 1,
                name: 'I phone'
            }]
        });
    }
}

export default new SubCategoryController();