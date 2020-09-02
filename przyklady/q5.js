var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});
var bucket = cluster.bucket('demo');

index_go();



async function index_go() {
  var bucketManager = bucket.CreateManager();
  await bucketManager.CreateN1qlPrimaryIndexAsync();
  await bucketManager.CreateN1qlIndexAsync("index_title", "title");
  await bucketManager.CreateN1qlIndexAsync("index_pages", "pages");
}