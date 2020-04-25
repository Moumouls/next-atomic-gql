FROM node:alpine as builder
ENV NODE_ENV=production

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY . /srv/app

WORKDIR /srv/app

RUN NODE_ENV=development yarn && \
yarn generate:ci && \
yarn build && rm -rf node_modules && \
yarn --prod && \
yarn cache clean && \
find ./node_modules -type f  \( -iname \*.d.ts -o -iname \*.js.map -o -iname \*.txt -o -iname \*.flow -o -iname \*.md -o -iname \*.test.js -o -iname \*.spec.js \) -delete

FROM node:alpine as app

WORKDIR /srv/app
ENV NODE_ENV=production
COPY --from=builder /srv/app .

# Server run on 80
CMD yarn start