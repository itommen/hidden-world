import User from '../../modals/User/User';
import Session from '../../modals/Session/Session';

import { notFound } from '../common';

export function login(req, res) {
    return User.findOne({
        userName: req.body.userName,
        password: req.body.password
    })
        .then(notFound)
        .then(({id, firstName, lastName}) => createSession(id)
            .then(sessionId => res.send({
                    token: sessionId,
                    firstName,
                    lastName
                })
            )
        )
        .catch(() => res.status(401).send());
}

function createSession(userId) {
    return Session.remove({
        userId
    })
        .then(() => Session.create({
            userId
        }))
        .then(({id}) => id);
}