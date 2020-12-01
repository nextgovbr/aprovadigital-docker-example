FROM node:12

COPY . /home/api 
WORKDIR /home/api
RUN npm i -g @nestjs/cli && npm i
