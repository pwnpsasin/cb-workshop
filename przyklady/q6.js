var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});
var bucket = cluster.bucket('demo');

queryNamed();


async function queryNamed() {
  const query = `SELECT title, category_main FROM demo WHERE type = 'meta' AND category_main=$CM LIMIT $MYLIMIT`;
  const options = { parameters: { MYLIMIT: 10, CM: 430 } };

  try {
    let result = await cluster.query(query, options);
    console.log("Result:", result);
    cluster.close();
    return result;
  } catch (error) {
    console.error('Query failed: ', error);
  }
}



// https://docs.couchbase.com/nodejs-sdk/current/project-docs/migrating-sdk-code-to-3.n.html