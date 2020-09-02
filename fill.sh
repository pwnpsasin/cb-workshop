docker run --rm -v $(pwd)/data:/data -v $(pwd):/app --network host -w /app -it couchbase:6.5.1 ./import.sh $1


