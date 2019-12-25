import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { SubChildCategorySchema } from './subchildcategories.model';

const SubChildCategory = mongoose.model('SubChildCategory', SubChildCategorySchema);

class SubChildCategoryController {

    public addNewCategory(req: Request, res: Response) {
        let newSubChildCategory = new SubChildCategory(req.body);

        newSubChildCategory.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getAllCategories(req: Request, res: Response) {
        SubChildCategory.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({

            });
        });
    }

    public testCats(req: Request, res: Response) {
        res.json({
            subchildcategories: [{
                id: 1,
                name: 'Iphone X'
            }]
        });
    }
}

export default new SubChildCategoryController();