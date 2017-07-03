'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = [new _User2.default({
    userName: 'tomm',
    password: '123',
    email: 'a@a.com',
    firstName: 'tom',
    lastName: 'mend'
}), new _User2.default({
    userName: 'gilm',
    password: '111',
    email: 'b@b.com',
    firstName: 'gil',
    lastName: 'mend'
}), new _User2.default({
    userName: 'sean',
    password: '999',
    email: 'c@c.com',
    firstName: 'sean',
    lastName: 'mend2'
})];

exports.default = users;