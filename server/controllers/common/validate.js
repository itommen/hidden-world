import { isEmpty } from 'lodash';
import createError from 'http-errors';

export default function (values, validator) {
  const validationErrors = validator(values);
  if (!isEmpty(validationErrors)) {
    throw createError(500, 'Validation Error');
  }
}
