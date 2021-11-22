
const connect = require('../services/connect');

exports.post = async (req, res, next) => {
    const busca = await connect.post('auth', req.body, { headers: {
        'Accept': 'application/json',
        "Authorization":  req.headers.authorization
    } })
        .then(response => {
            return res.status(200).json(response.data);
        })
        .catch(error => { return res.status(400).json(error) });
}
