/*
CREATE DATASET metas ON `demo` WHERE `type` = "meta";

CONNECT LINK Local;

SELECT * FROM metas LIMIT 10

SELECT VALUE COUNT(*) FROM metas

SELECT * FROM metas ORDER BY title LIMIT 1

SELECT VALUE mt
FROM metas mt 
WHERE id = 100161

SELECT VALUE {"a": mt.id, "b": mt.title}
FROM metas mt 
WHERE id = 100161

SELECT COUNT(*) AS num_books FROM metas;

SELECT VALUE COUNT(*) FROM metas;

SELECT lang, count(*) FROM metas GROUP BY lang HAVING count(*)> 100

*/


var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1:8091', {
  username: 'programista',
  password: 'programistaszkolenie'
});
var bucket = cluster.bucket('demo');

queryNamed();


async function queryNamed() {
  const query = "SELECT title FROM `metas` LIMIT 10";


  try {
    let result = await cluster.analyticsQuery(query);
    console.log("Result:", result);
    cluster.close();
    return result;
  } catch (error) {
    console.error('Query failed: ', error);
  }
}



