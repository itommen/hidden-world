'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notFound = notFound;
function notFound(model) {
    if (!model) {
        return Promise.reject('model not found');
    }
    return model;
}