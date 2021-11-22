const express = require('express');
var cors = require('cors');
const app = express();

var authRouter = require('./src/routes/auth');
// var recuperarSenhaRouter = require('./src/routes/recuperarsenha');
var pingRouter = require('./src/routes/ping');
// var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var processosRouter = require('./src/routes/processos');
// var viaCepRouter = require('./src/routes/viacep');
var chatRouter = require('./src/routes/faq');
var filesRouter = require('./src/routes/files');

app.use(cors());
app.options('*', cors());
app.use(express.json()); //tornar o corpo inteligivel para o javascript. Transforma a requisição em json

app.use('/', pingRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
// app.use('/recuperarsenha', recuperarSenhaRouter);
app.use('/processos', processosRouter);
// app.use('/cep', viaCepRouter);
app.use('/chat', chatRouter);
app.use('/files', filesRouter);


app.listen(process.env.PORT || 4000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

