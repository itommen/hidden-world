import { AsyncRouter } from 'express-async-router';

import { insert, update, getAll, fetch } from './controller';

const router = AsyncRouter();

router.get('/', getAll);
router.get('/:id', fetch);
router.post('/', insert);
router.put('/', update);

export default router;
