import { AsyncRouter } from 'express-async-router';

import { login, auth, getAll, insert, fetch, remove } from './controller';

const router = AsyncRouter();

router.get('/', getAll);
router.post('/', insert);
router.get('/:id', fetch);
router.post('/login', login);
router.post('/auth', auth);
router.delete('/:id', remove);

export default router;
