set -m

CBPASSWD=demodemo2020

# setup  users, roles and passwd
curl -X PUT --data "password=api01szkolenie&name=Szkolenie API01&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api01
curl -X PUT --data "password=api02szkolenie&name=Szkolenie API02&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api02
curl -X PUT --data "password=api03szkolenie&name=Szkolenie API03&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api03
curl -X PUT --data "password=api04szkolenie&name=Szkolenie API04&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api04
curl -X PUT --data "password=api05szkolenie&name=Szkolenie API05&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api05
curl -X PUT --data "password=api06szkolenie&name=Szkolenie API06&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api06
curl -X PUT --data "password=api07szkolenie&name=Szkolenie API07&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api07
curl -X PUT --data "password=api08szkolenie&name=Szkolenie API08&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api08
curl -X PUT --data "password=api09szkolenie&name=Szkolenie API09&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api09
curl -X PUT --data "password=api10szkolenie&name=Szkolenie API10&roles=cluster_admin,bucket_admin[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/api10

curl -X PUT --data "password=programistaszkolenie&name=Aplikacja -> API&roles=bucket_full_access[demo]" http://Administrator:$CBPASSWD@127.0.0.1:8091/settings/rbac/users/local/programista

