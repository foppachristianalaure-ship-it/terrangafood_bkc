FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci --legacy-peer-deps --no-audit --no-fund

COPY . .

ENV NEXT_PUBLIC_API_URL=http://localhost:3001/api

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]