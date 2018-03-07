'use strict';

var express = require('express');
var path = require('path');
var underscoreTemplate = require('./util/underscore-template');
var less = require('less-middleware');

var app = express();

app.use(less(__dirname + '/public', { force: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('browserify-dev-middleware')({
    src: __dirname + '/public/web',
    transforms: [
        require('./util/browserify-jst')
    ]
}));

// template engine
app.engine('html', underscoreTemplate.express({}));
app.set('view engine', 'html');

// routes
app.use(require('./app/routes/gte'));

app.use(function (req, res, next) {
    res.status(404).send('<html>not found</html>');
});

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.statusCode || err.status || 500);
    if (req.xhr || req.accepts(['html', 'json']) === 'json') {
        res.json({err: err.message});
    } else {
        console.log('web-server error', err);
        res.status(500).send('<html>internal</html>');
    }
});

// Launch HTTP server
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Express server listening on port ' + server.address().port);
});