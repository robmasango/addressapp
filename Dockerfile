FROM node:8
RUN mkdir /addressapp
ADD . /addressapp
WORKDIR /addressapp
RUN npm install
RUN bower install --allow-root
EXPOSE 80
CMD ["npm", "start"]
