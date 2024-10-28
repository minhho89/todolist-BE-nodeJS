FROM node:22.2.0

WORKDIR /app

COPY package*.json /app

RUN npm install --production

COPY . .

EXPOSE 3000

ENV NODE_ENV=production
CMD ["npm", "run", "start"]


