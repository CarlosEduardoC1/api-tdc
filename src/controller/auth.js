
const connect = require('../services/connect');

exports.post = async (req, res, next) => {
    await connect.post('auth', req.body)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => { res.status(400).json(error) });
}
