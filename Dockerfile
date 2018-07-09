FROM node:8
RUN mkdir /addressapp
ADD . /addressapp
WORKDIR /addressapp
RUN npm i
EXPOSE 80
CMD ["npm", "start"]