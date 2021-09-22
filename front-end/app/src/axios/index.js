import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8887';
axios.defaults.timeout = 10000;
axios.interceptors.response.use((response) => response, (error) => {
    // whatever you want to do with the error
    console.log(error);
    throw error;
});

export default axios;