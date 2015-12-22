var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('page/index', { title: 'express fis3 swig home' });
});

module.exports = router;
