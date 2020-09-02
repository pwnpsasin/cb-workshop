var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1', {
  username: 'programista',
  password: 'programistaszkolenie',
});
var bucket = cluster.bucket('demo');
var coll = bucket.defaultCollection();
 
coll.upsert('testdoc', { name: 'Frank' }, (err, res) => {
  if (err) throw err;
 
  coll.get('testdoc', (err, res) => {
    if (err) throw err;
 
    console.log(res.value);
    // {name: Frank}
  });
});
