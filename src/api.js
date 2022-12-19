import axios from 'axios';

let myApi = axios.create({
    baseURL: 'https://hair-saloon.glitch.me/',
});

const api = {
    getUsers: () => {
        return myApi.get('/user');
    },
    getSaloons: () => {
        return myApi.get('/saloon');
    },
    newUser: (user) => {
        return myApi.post('/users', user);
    },
    newEmployee: (employee) => {
        return myApi.post('/employee', employee);
    },
    getEmployeeSaloons: (employeeId) => {
        return myApi.get(`/employee/${employeeId}/saloons`);
    },

}

export default api;