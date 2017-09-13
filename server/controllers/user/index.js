import { AsyncRouter } from 'express-async-router';

import { login, auth } from './controller';

const router = AsyncRouter();

router.post('/login', login);
router.post('/auth', auth);

export default router;
