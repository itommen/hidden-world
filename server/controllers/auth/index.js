import { AsyncRouter } from 'express-async-router';

import { login } from './controller';

const router = AsyncRouter();

router.post('/login', login);

export default router;
