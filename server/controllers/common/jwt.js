import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET;

export function sign(user) {
  return jwt.sign(user, SECRET);
}
