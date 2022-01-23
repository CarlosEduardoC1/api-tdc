
const connect = require('../services/connect');

exports.salva = async (req, res, next) => {
    await connect.get('files', req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { console.log(error); res.status(400).json(error) });
}

exports.lista = async (req, res, next) => {
    await connect.get('files/get-names/' + req.params.user + '/' + req.params.processo, req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.delete = async (req, res, next) => {
    await connect.post('files/delete-files', req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}
