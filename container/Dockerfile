ARG NODE_VERSION=25.0.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory for all build stages.
WORKDIR /usr/src/app

################################################################################
# Create a stage for installing production dependencies.
FROM base AS deps

# Download dependencies AS a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.yarn to speed up subsequent builds.
# Leverage bind mounts to package.json and yarn.lock to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
#   --mount=type=bind,source=yarn.lock,target=yarn.lock \
#   --mount=type=cache,target=/root/.yarn \
   npm install --frozen-lockfile

################################################################################
# Create a stage for building the application.
FROM deps AS build

# Copy the rest of the source files into the image.
COPY . .

# Run the build script.
RUN npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
#FROM base AS final
FROM nginx:1.29.2

# Remove default nginx configs
RUN rm -rf /etc/nginx/conf.d/*

# Copy NGINX config
COPY nginx/conf.d/*.conf /etc/nginx/conf.d/

# Copy the built application from the build stage into the image.
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
