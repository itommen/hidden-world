import { AsyncRouter } from 'express-async-router';

import { insert, getAll } from './controller';

const router = AsyncRouter();

router.get('/', getAll);
router.post('/', insert);

export default router;
