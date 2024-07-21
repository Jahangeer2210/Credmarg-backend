import axios from 'axios';

const API_URL = 'http://localhost:8080/vendors';

const createVendor = (vendor) => {
    return axios.post(API_URL, vendor);
};

const getAllVendors = () => {
    return axios.get(API_URL);
};

export default {
    createVendor,
    getAllVendors
};
