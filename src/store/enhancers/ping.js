export const ping = store => next => action => {
    console.log('ping action', action);
    return next(action)
};
