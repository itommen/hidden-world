export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_STARTED': {
            return {
                state: 'loginOnProgress'
            };
        }
        case 'LOGIN_FAILED': {
            return {
                state: 'loginFailed',
                error: action.error
            };
        }

        case 'LOGIN_SUCCSED': {
            return {
                state: 'loginSuccsed',                
            };
        }
    }

    return state;
};