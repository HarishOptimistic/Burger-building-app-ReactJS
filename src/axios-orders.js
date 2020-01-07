import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-ffb63.firebaseio.com/'
});

export default instance;