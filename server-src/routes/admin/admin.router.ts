import { Router } from 'express';
import CategoryModule from '../../admin/categories';
import SubCategoryModule from '../../admin/subcategories';
import SubChildCategoryModule from '../../admin/subchildcategories';

let router = Router();

router.route('/categories')
    .get(CategoryModule.testcats);

router.route('/categories/subcategories')
.get(SubCategoryModule.testcats);

router.route('/categories/subcategories/subchildcategories')
.get(SubChildCategoryModule.testcats);


export let adminRouter = router;