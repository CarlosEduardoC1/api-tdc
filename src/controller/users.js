
const connect = require('../services/connect');

exports.salva = async (req, res, next) => {
    const busca = await connect.post('/users', req.body, {
        headers: {
            'Accept': 'application/json',
            "Authorization":  req.headers.authorization
        }
    })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.getMail = async (req, res, next) => {
    const busca = await connect.post('/users/verificaemail', req.body, {
        headers: {
            'Accept': 'application/json',
            "Authorization":  req.headers.authorization
        }
    })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.lista = async (req, res, next) => {
    const busca = await connect.get('users/get-my/data/' + req.params.id, req.body, {
        headers: {
            'Accept': 'application/json',
            "Authorization":  req.headers.authorization
        }
    })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.updt = async (req, res, next) => {
    const busca = await connect.post('users/update-process-file', req.body, {
        headers: {
            'Accept': 'application/json',
            "Authorization":  req.headers.authorization
        }
    })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.deleta = async (req, res, next) => {
    const busca = await connect.delete('users/' + req.params.id, {
        headers: {
            'Accept': 'application/json',
            "Authorization":  req.headers.authorization
        }
    })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}
