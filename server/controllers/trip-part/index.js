import { AsyncRouter } from 'express-async-router';

import multer from '../common/multer';

import { insert, update, getAll, fetch, remove } from './controller';

const router = AsyncRouter();

router.get('/', getAll);
router.get('/:id', fetch);
router.post('/', ...multer('images[]'), insert);
router.put('/', ...multer('images[]'), update);
router.delete('/:id', remove);

export default router;
