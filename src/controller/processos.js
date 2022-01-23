
const connect = require('../services/connect');

exports.salva = async (req, res, next) => {
    await connect.post('processos/create/process', req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.lista = async (req, res, next) => {
    await connect.get('processos/get/' + req.params.id)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.updt = async (req, res, next) => {
    await connect.post('users/update-data/' + req.params.id, req.body)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}

exports.deleta = async (req, res, next) => {
    await connect.delete('processos/drop-process/' + req.params.id_process + '/' + req.params.id)
        .then(response => { res.status(200).json(response.data); })
        .catch(error => { res.status(400).json(error) });
}
