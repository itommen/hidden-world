import {Router} from 'express';
import {login} from './user.controller';

const router = Router();

router.get('/', (req, res) => {    
    res.send('user home!');
});

router.post('/login', login);

export default router;