# Step 1: Build the React app
FROM node:20-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve it with Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Replace Nginx default config if you want (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
