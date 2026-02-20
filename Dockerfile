FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y python-is-python3

WORKDIR /frontend
ADD . .

RUN cp entrypoint.sh /usr/local/bin/docker-entrypoint
ENTRYPOINT ["docker-entrypoint"]