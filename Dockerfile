FROM node:16
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENTRYPOINT ["node", "init.js"]
CMD ["npm", "start"]
