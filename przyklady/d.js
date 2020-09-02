var couchbase = require('couchbase');


// Create a Couchbase Cluster connection
var cluster = new couchbase.Cluster('couchbase://localhost:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});

// Open a specific Couchbase bucket
var bucket = cluster.bucket('demo');
// And select the default collection
var coll = bucket.defaultCollection();

console.log(coll);

coll.get('contract::5')
.then((res) => { 
   console.log("Res: ", res); 
})
.catch((err) => { 
   console.log("Err: ", err); 
});


coll.mutateIn('contract::5', [
    couchbase.MutateInSpec.upsert('fax', '311-555-0151')
]);


coll.get('contract::5')
.then((res) => { 
   console.log("Res: ", res); 
})
.catch((err) => { 
   console.log("Err: ", err); 
});