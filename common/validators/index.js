import _, { isPlainObject } from 'lodash';

const validationCalculator = (validations) => (values = {}) => _(validations)
  .transform((result, validators, key) => {
    if (isPlainObject(validators)) {
      result[key] = validationCalculator(validators)(values[key]);
    }
    else {
      result[key] = validators.map(validtor => validtor(values[key])).find(x => x);
    }
  })
  .pickBy((value) => !_.isEmpty(value))
  .value();

export default validationCalculator;
