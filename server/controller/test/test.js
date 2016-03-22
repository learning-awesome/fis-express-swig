var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    // pagelet Id
    res.bigpipe.bind('heding1', function(setter) {

        // simulate an async progress
        setTimeout(function() {

            // now set data to the pagelet
            setter(null, {
               title:'0000001',
               content:'0000002'
            });
        }, 2000);
    });

    res.render('page/test/index.tpl', {});
});



router.get('/widget', function (req, res) {

    res.render('page/test/widget/widget.tpl', {});
});

module.exports = router;
