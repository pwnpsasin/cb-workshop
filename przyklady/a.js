var couchbase = require('couchbase');

// Create a Couchbase Cluster connection
var cluster = new couchbase.Cluster('couchbase://localhost:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});

// Open a specific Couchbase bucketse.
var bucket = cluster.bucket('demo');
// And select the default collection
var coll = bucket.defaultCollection();

console.log(coll);


