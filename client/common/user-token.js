const LOGGED_USER_KEY = 'USER_TOKEN';

export function getUserToken() {
    return JSON.parse(localStorage.getItem(LOGGED_USER_KEY));
}

export function setUserToken(user) {
    localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user));
} 

export function clearUserToken() {
    localStorage.removeItem(LOGGED_USER_KEY);
}