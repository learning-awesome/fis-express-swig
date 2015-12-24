var express = require('express');
var Article = require('../model/article');
var router = express.Router();ß

/* GET home page. */
router.get('/', function (req, res) {
  if (req.session.visitCount) {
    req.session.visitCount++;
  } else {
    req.session.visitCount = 1;
  }
  console.log(req.session);
  Article.query(1, 20, function (result) {
    res.render('page/news/index', {data: result});
  });
});

router.get('/news/:pageIndex/:pageSize', function (req, res) {
  var pageIndex = req.params.pageIndex;
  var pageSize = req.params.pageSize;
  console.log('--------pageIndex:' + pageIndex + ' pageSize:' + pageSize);
  Article.query(pageIndex, pageSize, function (result) {
    res.render('page/news/index', {data: result});
  });
});
