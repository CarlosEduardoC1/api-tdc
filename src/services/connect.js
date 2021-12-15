const axios = require('axios').default;

const connect = axios.create({ 
    // baseURL: `https://d90b-2804-3a8-849-c000-f0cf-10b4-aaff-70fe.ngrok.io/`
    baseURL: `http://54.94.0.2:5000`
 });

module.exports = connect;