'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = login;

var _User = require('../../modals/User/User');

var _User2 = _interopRequireDefault(_User);

var _Session = require('../../modals/Session/Session');

var _Session2 = _interopRequireDefault(_Session);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(req, res) {
    return _User2.default.findOne({
        userName: req.body.userName,
        password: req.body.password
    }).then(_common.notFound).then(function (_ref) {
        var id = _ref.id,
            firstName = _ref.firstName,
            lastName = _ref.lastName;
        return createSession(id).then(function (sessionId) {
            return res.send({
                token: sessionId,
                firstName: firstName,
                lastName: lastName
            });
        });
    }).catch(function () {
        return res.status(401).send();
    });
}

function createSession(userId) {
    return _Session2.default.remove({
        userId: userId
    }).then(function () {
        return _Session2.default.create({
            userId: userId
        });
    }).then(function (_ref2) {
        var id = _ref2.id;
        return id;
    });
}