import { Router } from 'express';
import { arouter } from './admin';

let router = Router();

router.use('/admin', arouter);

export let apiRouter = router;