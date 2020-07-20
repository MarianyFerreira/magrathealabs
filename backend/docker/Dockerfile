# pull official base image
FROM node:13.12.0-alpine

ARG TZ

# set working directory
WORKDIR /magrathealabs

# Add dependencies for installing
RUN apk add --no-cache yarn

# copy app dependencies files
COPY package.json ./
COPY yarn.lock ./

# install app dependencies
RUN yarn install --check-files --network-concurrency 1

# add app
COPY . ./

# expose port 3100 from in the container to the outside
EXPOSE 3100
# debugger
EXPOSE 9229

# start app
CMD ["yarn", "run", "start"]
