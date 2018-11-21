# # do package install with yarn 
# FROM mhart/apline-node AS builder
# WORKDIR /chat
# COPY . .
# RUN yarn
# RUN yarn build & yarn run pkg

# # And then copy the pkg binary from that stage to the smaller base image
# FROM alpine:3.7
# WORKDIR /chat
# COPY --from=builder /chat/pkg .
# CMD ./next-app

# node config #
FROM node
WORKDIR /chat
COPY package.json /chat
RUN yarn
COPY . /chat
CMD node ./src/server.js
EXPOSE 8080


# FROM nodejs
# WORKDIR /chat
# COPY . /chat
# RUN python3 ./web.py