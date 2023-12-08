FROM node:18.17.0

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install -g @angular/cli@15.2.10

COPY . /app

EXPOSE 4200

CMD ng serve --host 0.0.0.0