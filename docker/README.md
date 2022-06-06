How to run Iroha server locally on Docker
docker volume create --name=chainfox-iroha-postgres-vol
docker volume create --name=chainfox-iroha-vol
docker-compose -f docker/docker-compose-chainfox.yaml up

How to run Iroha server on Google Cloud:
Prerequisite: Start VM on docker-composer-ubuntu
1.	git clone https://github.com/SpaceTimerLoL/chainfox-iroha
2.	cd chainfox-iroha/docker/iroha
3.	chmod +x entrypoint.sh
4.	cd chainfox-iroha
5.	sudo chmod 666 /var/run/docker.sock
6.	docker volume create --name=chainfox-iroha-postgres-vol
7.	docker volume create --name=chainfox-iroha-vol
8.	docker-compose -f docker/docker-compose-chainfox.yaml up



