export function validateLoginRequest({userName, password}) {
    if(!userName) {
        return Promise.reject('user name is required');
    }

    if(!password) {
        return Promise.reject('password is required');
    }

    return Promise.resolve();
};