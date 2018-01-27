import convert from '../common/convert';
import { byParams, byId } from '../common/validated-query';

import db from '../../config/mongoose';
import { sign } from '../common/jwt';

const properties = ['id', 'firstName', 'lastName'];

const User = db.model('User');

export async function login({ body: { userName, password } }) {
  const user = await byParams(User, {
    userName,
    password
  });

  const converted = convert(user, properties);

  return {
    token: sign(converted),
    converted
  };
}

export async function auth({ user: { id } }) {
  await byId(User, id);
}
