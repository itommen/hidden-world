import { AsyncRouter } from 'express-async-router';

import { getAllCountries, add, remove } from './controller';

const router = AsyncRouter();

router.get('/', getAllCountries);
router.put('/add', add);
router.put('/remove', remove);

export default router;
