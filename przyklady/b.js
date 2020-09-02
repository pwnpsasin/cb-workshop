var couchbase = require('couchbase');
var ottoman=require('ottoman');


// Create a Couchbase Cluster connection
var cluster = new couchbase.Cluster('couchbase://localhost:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});

// Open a specific Couchbase bucket, `travel-sample` in this case.
var bucket = cluster.bucket('shop');
// And select the default collection
var coll = bucket.defaultCollection();

console.log(coll);


ottoman.store = new ottoman.CbStoreAdapter(coll, couchbase);
ottoman.bucket = bucket;

 console.log(ottoman);

/*
var BikeMdl = ottoman.model('Bike', {
  stockID: { type:'string', auto:'uuid', readonly:true },   // ← auto Increment UUID
  acquiredON: { type: 'Date', default:Date.now },           // ← auto populate date function
  vin: 'string',
  make: 'string',
  model: 'string',
  year: 'integer',
  description: 'string',
  condition: 'string',
  price: 'number',
  status: 'string',
  mileage: 'integer',
  photos: [{type:'string'}],                                // ← array of strings, URLS to photos
  rides: [{                                                 // ← array of test rides
    customer: {ref:'Customer'},	                             // ← reference to another Ottoman object
    employee: {ref:'Employee'},                             // ← reference to another Ottoman object
    date: 'Date',
    miles: 'number'
  }],
  sale: {                                                   // ← embedded sale document 
    customer: {ref:'Customer'},	                             // ← reference to another Ottoman object
    employee: {ref:'Employee'},	                             // ← reference to another Ottoman object
    amount: 'number',
    warranty: 'number',
    date: { type:'Date', default:Date.now }                 // ← auto populate date function
  }
}, {
  index: {
    findByStockID: {            // ← refdoc index
      type: 'refdoc',
      by: 'stockID'
    },
    findByMake: {               // ← secondary index
      by: 'make'
    },
    findByYear: {               // ← secondary index
      by: 'year'
    },
    findByCondition: {          // ← secondary index
      by: 'condition'
    },
    findByStatus: {             // ← secondary index
      by: 'status'
    },
    findByVin: {                // ← refdoc index
      type: 'refdoc',
      by: 'vin'
    }
  }
});



var bike = new BikeMdl();  

console.log(bike);

*/

