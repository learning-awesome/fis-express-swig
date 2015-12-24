var mysql = require('mysql');

exports.getConnection=function() {
 console.log('>>>start conn.........');
 return mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'smart-note',
  port: 3306
 });
}

exports.query=function(strSql, params, callback) {
  var conn = exports.getConnection();
  conn.connect();
  console.log('>>>start conn success');
  var query = conn.query(strSql, params, function(err, rows, fields) {
   if (err) throw err;
   callback(rows, fields);
  });
  console.log('>>>sql:' + query.sql);
  conn.end();
}