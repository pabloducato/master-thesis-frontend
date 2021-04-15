### STAGE 1: Build ###

FROM node:alpine AS build-stage
WORKDIR /master-thesis-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###

FROM nginx as production-stage
COPY --from=build-stage /master-thesis-frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
