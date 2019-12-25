import * as express from 'express';
import { adminRouter } from './admin.router';

var router = express.Router()

router.use('/', adminRouter);

export let arouter = router;