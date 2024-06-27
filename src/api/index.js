export const getUsers = (currentPage=1,results=5,nat='uk') => {
    return fetch(`https://randomuser.me/api/?results=${results}&page=${currentPage}&seed=fpm2024-1&nat=${nat}`)
        .then((response) => response.json())
};