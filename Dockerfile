FROM node:20-alpine3.19

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN npm i

COPY --chown=node:node . .

USER node:node

EXPOSE 4200

CMD ["npm", "run", "dev"]