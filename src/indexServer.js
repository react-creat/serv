var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

const port = 443;

https.createServer({
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('certificate.cert')
}, app)
.listen(443, function () {
  console.log('Example app listening on port 443! Go to https://localhost:443/')
})


const bodyParser = require('body-parser');

var cors = require('cors');

app.use(cors());

const mongoose = require('mongoose');

import PostModel from './models/post';
import PostController from './Controler/PostControler';
const Post = new PostController();

mongoose.connect('mongodb://127.0.0.1:27017/blogReact', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/posts', Post.create);

app.get('/posts', Post.index);

app.get('/posts/:id', Post.read);

app.delete('/posts/:id', Post.delete);

app.put('/posts/:id', Post.update);

