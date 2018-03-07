var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    return res.render('gte', {
        meta: {title: 'GTE'},
        script: '/index.js'
    });
});

module.exports = router;