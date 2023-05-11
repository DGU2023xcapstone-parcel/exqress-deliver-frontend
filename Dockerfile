FROM node:16 AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . .
RUN yarn build


FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]