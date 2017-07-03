import { getUserToken } from '../common/user-token';
import headers from './common-headers';

export const authStared = () => ({
    type: 'AUTH_STARTED'
});

export const authFailed = error => ({
    type: 'AUTH_FAILED',
    error
});

export const authSuccsed = userInfo => ({
    type: 'AUTH_SUCCSED',
    userInfo
});

export const auth = () => dispath => {
    dispath(authStared());
    const token = getUserToken();
    if (!token) {
        dispath(authFailed('no token provided'));
        return;
    }

    return fetch('api/auth', {
        method: 'POST',
        headers,
        body: token
    })
        .then(respone => {
            if (!respone.ok) {
                // TODO: should check why
                authFailed('auth failed');
            }

            return respone.json();
        })
        .then(userInfo => {
            dispath(authSuccsed(userInfo));
        })
        .catch(error => {
            dispath(authFailed(error));
        });
};