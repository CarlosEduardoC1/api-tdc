const axios = require('axios').default;

const connect = axios.create({ baseURL: `http://localhost:3000` });

module.exports = connect;