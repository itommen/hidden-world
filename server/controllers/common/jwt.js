import jwt from 'jsonwebtoken';

// TODO: should get from env var
const SECRET = 'secret';

export function sign(user) {
  return jwt.sign(user, SECRET);
}
