import empty from 'http-reject-empty';

import db from '../../mongoose.config';

export function login({ body: { userName, password } }, res) {
  const User = db.model('User');

  return User.findOne({
    userName,
    password
  })
    .then(empty)
    .then(x => {
      debugger;
    });
}
