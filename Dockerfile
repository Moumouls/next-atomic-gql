FROM node:alpine
ENV NODE_ENV=production

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY . /srv/app

WORKDIR /srv/app

RUN NODE_ENV=development yarn && yarn generate:ci && yarn build && rm -rf node_modules && yarn --prod && yarn cache clean

CMD yarn start
