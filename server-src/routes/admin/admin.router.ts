import { Router } from 'express';
import CategoryModule from '../../admin/categories';
import SubCategoryModule from '../../admin/subcategories';
import SubChildCategoryModule from '../../admin/subchildcategories';
import OrderModule from '../../admin/orders';

let router = Router();

router.route('/categories')
    .get(CategoryModule.getcategories)
    .post(CategoryModule.addcategory);

router.route('/categories/:id?')
    .get(CategoryModule.findById)
    .put(CategoryModule.update)
    .delete(CategoryModule.delete);

router.route('/categories/subcategories')
    .get(SubCategoryModule.testcats);

router.route('/categories/subcategories/subchildcategories')
    .get(SubChildCategoryModule.testcats);

router.route('/orders')
.get(OrderModule.getorders);

router.route('/orders/:id')
.get(OrderModule.getorders);


export let adminRouter = router;