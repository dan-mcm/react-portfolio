FROM node:8

MAINTAINER Daniel McMahon <daniel40392@gmail.com>

WORKDIR /opt/react-portfolio

ADD . /opt/react-portfolio

ENV PORT 3000

RUN npm install

EXPOSE 3000

CMD npm start
