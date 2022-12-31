import axios from 'axios';

let myApi = axios.create({
    baseURL: 'https://saloon.herokuapp.com/',
});

const api = {
    login: (email) => {
        return myApi.post('/user/login', {
            email: email
        });
    },
    getUsers: () => {
        return myApi.get('/user');
    },
    getUserByEmail: (email) => {
        return myApi.get(`/user/email/${email}`);
    },
    userIsFuncionary: async (userId) => {
        const funcionary = await myApi.get(`/functionary/user/${userId}`);
        return !!funcionary.data;
    },
    getMySaloon: async (userId) => {
        const saloon = await myApi.get(`/saloon/owner/${userId}`);
        return saloon.data;
    },
    getFunctionaries: async (saloonId) => {
        const funcionaries = await myApi.get(`/functionary/saloon/${saloonId}`);
        return funcionaries.data;
    },
    getFuncionaryByUserId: async (userId) => {
        const funcionary = await myApi.get(`/functionary/user/${userId}`);
        return funcionary.data;
    }

}

export default api;