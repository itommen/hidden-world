import { reduce, isObject } from 'lodash';

export default function (model, properties) {
  return reduce(properties,
    (result, prop) => {
      if (isObject(prop)) {
        result[prop.newName] = model[prop.orignalName];
      }
      else {
        result[prop] = model[prop];
      }
      return result;
    },
    {});
}
