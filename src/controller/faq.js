
const connect = require('../services/connect');

exports.salva = async (req, res, next) => {
    await connect.get('chat/get-messages/' + req.params.user + '/' + req.params.processo, req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.lista = async (req, res, next) => {
    await connect.post('chat/set-message', req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}
