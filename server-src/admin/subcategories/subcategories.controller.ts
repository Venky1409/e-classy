import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { SubCategorySchema } from './subcategories.model';

const SubCategory = mongoose.model('subcategories', SubCategorySchema);

class SubCategoryController {

    public SaveSubCategory(req: Request, res: Response) {
        let newSubCategory = new SubCategory(req.body);

        newSubCategory.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public SubCategoriesByCategoryId(req: Request, res: Response) {
        SubCategory.find({ categoryid: req.params.id }, function (err, data) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: data
            });
        });
    }

    public delete(req: Request, res: Response) {
        SubCategory.findByIdAndRemove(req.params.id, function (err, post) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: post
            });
        });
    }
}

export default new SubCategoryController();