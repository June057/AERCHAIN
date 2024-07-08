# Start your image with a node base image
FROM node:20-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./
COPY yarn*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./app ./app
COPY ./public ./public

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN yarn install \
    && yarn global add serve \
    && yarn run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "build" ]