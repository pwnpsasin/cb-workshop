var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});
var bucket = cluster.bucket('demo');

var qs = "SELECT title FROM demo USE KEYS 'meta::8'";

cluster.query(qs).then((result) =>{
  console.log(result);
}).catch((err) =>{
  console.log(err);
});
