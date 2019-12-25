import { Router } from 'express';
import CategoryModule from '../../admin/categories';

let router = Router();

router.route('/categories')
    .get(CategoryModule.testcats);

export let adminRouter = router;