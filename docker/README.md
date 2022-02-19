docker volume create --name=chainfox-iroha-postgres-vol
docker volume create --name=chainfox-iroha-vol
docker-compose -f docker/docker-compose-chainfox.yaml up

