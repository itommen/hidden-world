import convert from '../common/convert';
import { byParams, byId } from '../common/validated-query';

import ensure from '../common/validate';
import validation from '~/common/validators/user';

import db from '../../config/mongoose';
import { sign } from '../common/jwt';

const loginProperties = ['id', 'firstName', 'lastName'];

const userProperties = [...loginProperties, 'userName', 'email'];

const User = db.model('User');

export async function getAll() {
  return (await User.find()).map(x => convert(x, userProperties));
}

export async function insert({ body }) {
  ensure(body, validation);

  const user = await new User(body).save();

  return convert(user, userProperties);
}

export async function login({ body: { userName, password } }) {
  const user = await byParams(User, {
    userName,
    password
  });

  const converted = convert(user, loginProperties);

  return {
    token: sign(converted),
    converted
  };
}

export async function auth({ user: { id } }) {
  await byId(User, id);
}
