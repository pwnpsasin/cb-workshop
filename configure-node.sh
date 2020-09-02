set -m

#screen -S cb -dm /entrypoint.sh couchbase-server
/entrypoint.sh couchbase-server &
echo "Starting server CouchBase ...."
sleep 15

# Setup index and memory quota
curl -v -X POST http://127.0.0.1:8091/pools/default -d memoryQuota=4096 -d indexMemoryQuota=2048 -d ftsMemoryQuota=256 -d cbasMemoryQuota=4096 -d eventingMemoryQuota=256 

# Setup services
curl -v http://127.0.0.1:8091/node/controller/setupServices -d services=kv%2Cn1ql%2Cindex%2Ccbas

# Setup credentials
curl -v http://127.0.0.1:8091/settings/web -d port=8091 -d username=Administrator -d password=$CBPASSWD

# Setup Memory Optimized Indexes
curl -i -u Administrator:$CBPASSWD -X POST http://127.0.0.1:8091/settings/indexes -d 'storageMode=memory_optimized'

# Load travel-sample bucket
#curl -v -u Administrator:password -X POST http://127.0.0.1:8091/sampleBuckets/install -d '["travel-sample"]'

# setup bucket
curl -v -u Administrator:$CBPASSWD -X POST http://127.0.0.1:8091/pools/default/buckets -d flushEnabled=1  -d replicaNumber=3 -d ramQuotaMB=2048 -d bucketType=couchbase  -d name=demo


echo "Type: $TYPE"


export


if [ "$TYPE" = "WORKER" ]; then
  sleep 15

  IP=`hostname -I`

  echo "Auto Rebalance: $AUTO_REBALANCE"
  if [ "$AUTO_REBALANCE" = "true" ]; then
    couchbase-cli rebalance --cluster=$COUCHBASE_MASTER:8091 --username=Administrator --password=$CBPASSWD --server-add=$IP --server-add-username=Administrator --server-add-password=$CBPASSWD
  else
    couchbase-cli server-add --cluster=$COUCHBASE_MASTER:8091 --username=Administrator --password=$CBPASSWD --server-add=$IP --server-add-username=Administrator --server-add-password=$CBPASSWD
  fi;
fi;

fg 1

# screen -R  cb


