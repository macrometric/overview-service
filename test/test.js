process.env.NODE_ENV = "development";

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url = `http://localhost:3030`;

describe("Integration Test", () => {
  it('should send back 1 item', (done) => {
    chai
      .request(url)
      .get('/test')
      .end((err, res) => {
        //tests here
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.equal(1);
        done();
      });
  });
});

describe("Check correct item", () => {
  it('should send back correct item', (done) => {
    chai
      .request(url)
      .get('/test')
      .end((err, res) => {
        //tests here
        res.body[0].should.have.property('user_id');
        res.body[0].user_id.should.equal(9999999);
        res.body[0].should.have.property('title');
        res.body[0].title.should.equal('Sleek Plastic Keyboard');
        res.body[0].should.have.property('description');
        res.body[0].description.should.equal('Facere dolorum et et officia omnis omnis. Qui doloremque incidunt consectetur necessitatibus sit beatae qui architecto nisi. Sint ad autem quidem. Fuga ab maiores sequi consequatur quaerat.');
        res.body[0].should.have.property('price');
        res.body[0].price.should.equal('876.00');
        res.body[0].should.have.property('rating');
        res.body[0].rating.should.equal(4);
        done();
      })
  });
});

describe("Error Test", () => {
  it('Should send back a 404 response', (done) => {
    chai
      .request(url)
      .get('/wrongSpot')
      .end((err, res) => {
        //tests here
        res.should.have.status(404);
        done();
      });
  });
});