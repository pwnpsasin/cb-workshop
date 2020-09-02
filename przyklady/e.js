var couchbase = require('couchbase');


// Create a Couchbase Cluster connection
var cluster = new couchbase.Cluster('couchbase://127.0.0.1:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});

// Open a specific Couchbase bucket
var bucket = cluster.bucket('demo');
// And select the default collection
var coll = bucket.defaultCollection();

console.log(coll);


// counter increment
coll.mutateIn('contract::7', [
    couchbase.MutateInSpec.upsert('lastImported', new Date().getTime()),
    couchbase.MutateInSpec.increment('importingCount', 1)
]).catch((err) => {
    console.log(err);
});



