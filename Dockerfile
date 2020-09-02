FROM couchbase:6.5.1
RUN apt-get update
RUN apt-get install nano screen

COPY configure-node.sh /opt/couchbase
RUN chmod 777 /opt/couchbase/configure-node.sh
CMD ["/opt/couchbase/configure-node.sh"]

