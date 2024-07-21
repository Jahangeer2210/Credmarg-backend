import axios from 'axios';

const API_URL = 'http://localhost:8080/api/emails';

const sendEmail = (email) => {
    return axios.post(API_URL, email);
};

const getAllEmails = () => {
    return axios.get(API_URL);
};

export default {
    sendEmail,
    getAllEmails
};
