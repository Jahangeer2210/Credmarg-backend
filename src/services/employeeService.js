import axios from 'axios';

const API_URL = 'http://localhost:8080/employees';

const createEmployee = (employee) => {
    return axios.post(API_URL, employee);
};

const getAllEmployees = () => {
    return axios.get(API_URL);
};

export default {
    createEmployee,
    getAllEmployees
};
