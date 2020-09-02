var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});
var bucket = cluster.bucket('demo');

const ids = [8,1000, 100161, 100165];

query1();



async function query1() {
  const query = `SELECT title FROM demo USE KEYS [${ids.map((i) => '\'meta::'+i+'\'').join(',')
}]`;
  const options = { adhoc: false }
  try {
    let result = await cluster.query(query, options);
    result.rows.forEach((row) => {
      console.log('Query row: ', row);
    });
    return result;
  
  } catch(error) {
    console.error('Query failed: ', error);
  }
}