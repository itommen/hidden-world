import convert from '../common/convert';
import { byParams, byId } from '../common/validated-query';

import ensure from '../common/validate';
import validation from '~/common/validators/user';

import db from '../../config/mongoose';
import { sign } from '../common/jwt';

const loginProperties = ['id', 'firstName', 'lastName'];

const usersMinimizedProperties = [...loginProperties, 'userName'];
const userFullProperties = [...usersMinimizedProperties, 'email']

const User = db.model('User');

export async function getAll() {
  return (await User.find()).map(x => convert(x, usersMinimizedProperties));
}

export async function insert({ body }) {
  ensure(body, validation);

  const user = await new User(body).save();

  return convert(user, usersMinimizedProperties);
}

export async function fetch({ params: { id } }) {
  const user = await byId(User, id);
  return convert(user, userFullProperties);
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

export async function remove({ params: { id } }) {
  await User.findByIdAndRemove(id);
}