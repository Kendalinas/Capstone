import axios from 'axios';

export const API = axios.create({
    baseURL: '//www.behance.net/v2/'

});

API.interceptors.request.use(function (config) {
    config.params.api_key = '8X7njeQ67MR015PmQj3g0J5j9StQJF98';


    return config;
}, function (error){
    return Promise.reject(error);
});
