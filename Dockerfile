FROM node:18-alpine

# Update Alpine packages to reduce vulnerabilities
RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 4321

CMD ["npm", "run", "preview"]
