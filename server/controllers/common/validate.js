import { isEmpty } from 'lodash';

export default function (values, validator) {
  const validationErrors = validator(values);
  return isEmpty(validationErrors)
    ? Promise.resolve()
    : Promise.reject(validationErrors);
}
