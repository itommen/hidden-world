import User from './User';

const users = [
    new User({
        userName: 'tomm',
        password: '123',
        email: 'a@a.com',
        firstName: 'tom',
        lastName: 'mend'
    }),
    new User({
        userName: 'gilm',
        password: '111',
        email: 'b@b.com',
        firstName: 'gil',
        lastName: 'mend'
    }),
    new User({
        userName: 'sean',
        password: '999',
        email: 'c@c.com',
        firstName: 'sean',
        lastName: 'mend2'
    }),
];

export default users;