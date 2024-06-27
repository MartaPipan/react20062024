
import queryString from 'query-string';

export const getUsers = (options = {}) => {
    const defaultOptions = {
        seed: 'fpm2024-1,',   //api key
        page: 1,
        results: 5,
    }
    const finallyOptions = {
        ...defaultOptions,
        ...options
    }
    const queryStr = queryString.stringify(finallyOptions);
    return fetch(`https://randomuser.me/api/?${queryStr}`)
        .then((response) => response.json())
};