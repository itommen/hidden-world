const createError = require('http-errors');

export function ensureEmpty(result) {
  if (!result) {
    throw new Error(createError(404));
  }

  return result;
}
