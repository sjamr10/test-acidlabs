FROM node:carbon
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
RUN yarn global add nodemon
COPY . ./
CMD ["npm", "start"]
