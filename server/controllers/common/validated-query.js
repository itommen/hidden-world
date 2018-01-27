import createError from 'http-errors';

function ensureResult(result) {
  if (!result) {
    throw createError(404, 'Not Found');
  }
}

export async function byId(model, id) {
  const result = await model.findById(id);
  ensureResult(result);
  return result;
}

export async function byParams(model, params) {
  const result = await model.findOne(params);
  ensureResult(result);
  return result;
}
