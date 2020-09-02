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


coll.get('contract::7')
.then((res) => { 
   console.log(res); 
})
.catch((err) => { 
   console.log(err); 
});



coll.mutateIn('contract::7', [
    couchbase.MutateInSpec.arrayAppend('books', {id: 3000}, {createParenst: true})
]);

coll.get('contract::7')
.then((res) => { 
   console.log(res); 
})
.catch((err) => { 
   console.log(err); 
});
