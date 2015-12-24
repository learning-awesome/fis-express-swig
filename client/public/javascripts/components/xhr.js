(function (global) {

  var request = {};

  request.request = function (url, method, params, callback) {
    console.log('xhr url:' + url);
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('>>>xhr response:%o', xhr.responseText);
        callback(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify(params));
  }

  request.get = function (url, params, callback) {
    request.request(url, "GET", params, callback);
  }

  request.post = function (url, params, callback) {
    request.request(url, "POST", params, callback);
  }

  global.XHR = request;

})(window);