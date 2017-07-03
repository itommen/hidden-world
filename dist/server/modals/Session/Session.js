'use strict';

Object.defineProperty(exports, "__esModule", {
       value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sessionSchema = _mongoose2.default.Schema({
       userId: {
              type: _mongoose2.default.Schema.ObjectId,
              required: true
       }
});

exports.default = _mongoose2.default.model('Session', sessionSchema);