FROM node:10-alpine

ADD . /app/

WORKDIR /app

RUN npm install --production

EXPOSE 8759

ENTRYPOINT ["npm"]

CMD ["start"]
