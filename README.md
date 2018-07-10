# AddressApp
The app is built on the node, express, postgres and angularjs stack.

Please view below:
The repo is on github at https://github.com/robmasango/addressapp
you can clone the app to review the code.

You can also choose to run it locally/manually by running
Ensure you have Postgres and node are running on your pc.
create database useraddress and table address
1. npm install 
2. bower install followed by
3. navigate to server folder and run node server.js

Run this docker command to get the image where the app is built:
run:
1. docker pull robmasango/addressapp
2. docker-compose up -d
3. Run the app on localhost port 80

Unit Tests:
Run
1. npm test
