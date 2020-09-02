var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});
var bucket = cluster.bucket('demo');

//design doc name, view name
bucket.viewQuery('counters', 'lang', {'group_level':1, 'start': 'B'}).then((res) =>
{ 
    console.log(res);

}).catch((err) => {
    console.log(err);
});

