import axios from 'axios';

let myApi = axios.create({
    baseURL: 'http://localhost:8080/',
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

    addAgendamento: async (agendamento) => {
        return myApi.post(`/agendamento`, agendamento);
    },

    getAgendamentos: async (saloonId) => {
        const agendamentos = await myApi.get(`/agendamento/saloon/${saloonId}`);
        return agendamentos.data;
    },

    getSaloonById: async (id) => {
        const saloon = await myApi.get(`/saloon/${id}`);
        return saloon.data;
    },
    getFunctionaries: async (saloonId) => {
        const funcionaries = await myApi.get(`/functionary/saloon/${saloonId}`);
        return funcionaries.data;
    },
    getFuncionaryByUserId: async (userId) => {
        const funcionary = await myApi.get(`/functionary/user/${userId}`);
        return funcionary.data;
    },
    getServiceById: async (id) => {
        const service = await myApi.get(`/service/${id}`);
        return service.data;
    },
    getServicesBySaloon: async (saloonId) => {
        const services = await myApi.get(`/service/saloon/${saloonId}`);
        return services.data;
    },
    getServicesByFuncionary: async (funcionaryId) => {
        const services = await myApi.get(`/service/functionary/${funcionaryId}`);
        return services.data;
    },
    addFunctionary: async (functionary) => {
        return myApi.post(`/functionary`, functionary);
    }

}

export default api;