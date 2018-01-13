import { forIn, isObject, isArray, mapValues } from 'lodash';

const { stringify, parse } = JSON;

const SERIALIZED = '!@#';

export function serialize(data) {
  const formData = new FormData();

  forIn(data, (value, key) => {
    if (value instanceof FileList) {
      [...value].forEach(x => formData.append(`${key}[]`, x));
    } else {
      formData.append(key, isObject(value) || isArray(value)
        ? `${SERIALIZED}${stringify(value)}`
        : value);
    }
  });


  return formData;
}

export function deserialize(data) {
  return mapValues(data, x => x.startsWith(SERIALIZED)
    ? parse(x.slice(SERIALIZED.length))
    : x);
}
