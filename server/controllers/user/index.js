import { AsyncRouter } from 'express-async-router';

import { login, auth, getAll } from './controller';

const router = AsyncRouter();

router.get('/', getAll);
router.post('/login', login);
router.post('/auth', auth);

export default router;
