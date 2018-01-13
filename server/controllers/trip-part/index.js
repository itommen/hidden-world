import { AsyncRouter } from 'express-async-router';

import multer from '../common/multer';

import { insert, update, getAll, fetch } from './controller';

const router = AsyncRouter();

router.get('/', getAll);
router.get('/:id', fetch);
router.post('/', ...multer('images[]'), insert);
router.put('/', ...multer('images[]'), update);

export default router;
