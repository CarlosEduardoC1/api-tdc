
const connect = require('../services/connect');

exports.salva = async (req, res, next) => {
    const busca = await connect.get('/chat/get-messages/' + req.params.user + '/' + req.params.processo, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.lista = async (req, res, next) => {
    const busca = await connect.post('/chat/set-message', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}
