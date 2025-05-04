# Step 1: Build the Vite app
FROM node:20-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve it with Nginx
FROM nginx:stable-alpine

# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html

# Copy all certificates (if present)
COPY --from=build /app/public/certificates /usr/share/nginx/html/certificates

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
