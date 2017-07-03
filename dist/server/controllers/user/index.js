'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _user = require('./user.controller');

var router = (0, _express.Router)();

router.get('/', function (req, res) {
    res.send('user home!');
});

router.post('/login', _user.login);

exports.default = router;