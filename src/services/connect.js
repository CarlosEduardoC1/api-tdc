const axios = require('axios').default;

const connect = axios.create({ baseURL: `https://ab67-2804-3a8-86e-c400-89d7-c29a-4bb1-90ba.ngrok.io` });

module.exports = connect;