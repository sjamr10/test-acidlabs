# Stage 1 - the build process
FROM node:carbon as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
CMD ["npm", "start"]
