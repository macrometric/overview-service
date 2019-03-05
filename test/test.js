process.env.NODE_ENV = "development";

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("GET /test", () => {
  it('should send back 1 item', (done) => {
    chai
      .request('http://localhost:3030')
      .get('/test')
      .end((err, res) => {
        //tests here
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.equal(1);

        done();
      })
  })
})