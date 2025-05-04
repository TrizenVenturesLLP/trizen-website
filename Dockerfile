
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

# Create certificates directory and ensure proper permissions
RUN mkdir -p /usr/share/nginx/html/certificates && \
    chmod 755 /usr/share/nginx/html/certificates

# Copy certificates if they exist in the build
COPY --from=build /app/public/certificates/*.pdf /usr/share/nginx/html/certificates/ 2>/dev/null || :

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
