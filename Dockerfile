FROM node:8
RUN mkdir /addressapp
ADD . /addressapp
WORKDIR /addressapp
RUN npm i
USER bower
RUN bower install
EXPOSE 80
CMD ["npm", "start"]
