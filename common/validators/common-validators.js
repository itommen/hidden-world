export function required(value) {
  return value ? null : 'Required';
}

export function minLength(min) {
  return value => value && value.length && value.length >= min
    ? null
    : `Value must contain atleast ${min} characters`;
}

export function maxLength(max) {
  return value => value && value.length && value.length <= max
    ? null
    : `Value must contain maxium ${max} characters`;
}

export function number(value) {
  return /^\d+$/.test(value) ? null : 'Value must be number';
}
