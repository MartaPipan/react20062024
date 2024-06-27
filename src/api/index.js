export const getUsers = (currentPage) => {
    return fetch(`https://randomuser.me/api/?results=5&page=${currentPage}&seed=fpm2024-1`)
        .then((response) => response.json())
};