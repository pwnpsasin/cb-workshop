var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});
var bucket = cluster.bucket('demo');

const mylimit = 10;
var qs = `SELECT title FROM demo WHERE type = 'meta' LIMIT ${mylimit}`;


cluster.query(qs).then((result) =>{
  console.log(result);
}).catch((err) =>{
  console.log(err);
});
