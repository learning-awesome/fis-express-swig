var Pager = require('client/public/component/pager.js');
var XHR = require('client/public/component/xhr.js');

var pager = new Pager({pageIndex: 2, defaultBottomHeight: 60});
pager.init(function (successCallback) {
    XHR.get('/news/' + pager.pageIndex + '/' + pager.pageSize, {}, function (responseText) {
        var articleList = document.getElementById('articleList');
        articleList.innerHTML += responseText;
        successCallback(responseText == '');
    });
});
