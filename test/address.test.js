process.env.NODE_ENV = 'test';
  /*
  * https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai //Delete later
  */
//const requestHandler = require('../server/request-handler.js');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/routes.js');
let should = chai.should();

chai.use(chaiHttp);
  /*
  * Test the /Get route
  */
describe('Address', () => {
  describe('/GET Address', () => {
      it('it should GET all the Addresses', (done) => {
        chai.request(server)
            .get('/address')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  /*
  * Test the /POST route
  */
  describe('/POST address', () => {
      it('it should not POST an address without pages field', (done) => {
        let address = {
            streetaddress: "9 Test Address Street",
            city: "Test City",
            country: "Test Country",
            postalcode: 2018,
            createdAt: new Date(),      
            deleted: false,
            status: true
        }
        chai.request(server)
            .post('/address')
            .send(address)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });

  });
});