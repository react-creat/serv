'use strict';

var _post = require('./models/post');

var _post2 = _interopRequireDefault(_post);

var _PostControler = require('./Controler/PostControler');

var _PostControler2 = _interopRequireDefault(_PostControler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();

app.use(cors());

var mongoose = require('mongoose');

var Post = new _PostControler2.default();

mongoose.connect('mongodb://127.0.0.1:27017/blogReact', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/posts', Post.create);

app.get('/posts', Post.index);

app.get('/posts/:id', Post.read);

app.delete('/posts/:id', Post.delete);

app.put('/posts/:id', Post.update);