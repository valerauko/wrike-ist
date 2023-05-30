FROM clojure:temurin-17-lein-2.10.0

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -

RUN apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

RUN npm install --global yarn
