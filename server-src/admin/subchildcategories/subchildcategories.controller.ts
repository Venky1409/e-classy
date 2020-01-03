import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { SubChildCategorySchema } from './subchildcategories.model';

const SubChildCategory = mongoose.model('subchildcategories', SubChildCategorySchema);

class SubChildCategoryController {
    public SaveSubChildCategory(req: Request, res: Response) {
        let newSubChildCategory = new SubChildCategory(req.body);

        newSubChildCategory.save((err, data) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json({
                status: 200,
                data: data
            });
        });
    }

    public SubChildCategoriesBySubCategoryId(req: Request, res: Response) {
        SubChildCategory.find({ subcategoryid: req.params.id }, function (err, data) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: data
            });
        });
    }

    public update(req: Request, res: Response) {
        SubChildCategory.findOneAndUpdate({ _id: req.params.id }, {
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
        SubChildCategory.findByIdAndRemove(req.params.id, function (err, post) {
            if (err) return res.send(err);
            res.status(200).json({
                status: 200,
                data: post
            });
        });
    }
}

export default new SubChildCategoryController();