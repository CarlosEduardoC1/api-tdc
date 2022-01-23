
const connect = require('../services/connect');

exports.salva = async (req, res, next) => {
    await connect.post('/users', req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.getMail = async (req, res, next) => {
    await connect.post('/users/verificaemail', req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.lista = async (req, res, next) => {
    await connect.get('users/get-my/data/' + req.params.id, req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.updt = async (req, res, next) => {
    await connect.post('users/update-process-file', req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.deleta = async (req, res, next) => {
    await connect.delete('users/' + req.params.id)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}
