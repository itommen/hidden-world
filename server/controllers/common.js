export function notFound(model) {
    if(!model) {
        return Promise.reject('model not found');
    }
    return model;
}