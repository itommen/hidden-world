import empty from 'http-reject-empty';
import { noop } from 'lodash';

import db from '../../config/mongoose';
import { sign } from '../common/jwt';

function convertUser(user) {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName
  };
}

export function login({ body: { userName, password } }) {
  const User = db.model('User');

  return User.findOne({
    userName,
    password
  })
    .then(empty)
    .then(convertUser)
    .then(user => ({
      token: sign(user),
      user
    }));
}

export function auth({ user: { id } }) {
  const User = db.model('User');

  return User.findById(id)
    .then(noop);
}
