
const connect = require('../services/connect');

exports.post = async (req, res, next) => {
    await connect.post('auth', req.body)
        .then(response => {
            return res.status(200).json(response.data);
        })
        .catch(error => { return res.status(400).json(error) });
}
