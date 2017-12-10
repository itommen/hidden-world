import _, { isPlainObject } from 'lodash';

const validationCalculator = (validations) => (values = {}) => _(validations)
  .transform((result, validators, key) => {
    result[key] = isPlainObject(validators)
      ? validationCalculator(validators)(values[key])
      : validators.map(validtor => validtor(values[key])).find(x => x);
  })
  .pickBy((value) => !_.isEmpty(value))
  .value();

export default validationCalculator;
