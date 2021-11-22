const axios = require('axios').default;

const connect = axios.create({ 
    baseURL: `https://8217-2804-3a8-86e-c400-89d7-c29a-4bb1-90ba.ngrok.io`
    // baseURL: `http://192.168.1.6:5000`
 });

module.exports = connect;