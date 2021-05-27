FROM node:14

RUN apt-get update && \
    apt-get upgrade --with-new-pkgs -y && \
    apt-get install -y openjdk-8-jdk-headless && \
    rm -rf /var/lib/apt/lists/*
