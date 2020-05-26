const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require ("../config/database");
const Browser = require('zombie');

Browser.localhost('localhost',4003);
describe('GET /localhost:4003/medico', () => {
    const browser = new Browser();
    it('tem que responder com a lista de todos os médicos', (done) => {
        chai.request(server)
        .get('localhost:4003/medico')
        .send()
        .end((err, res) =>{
            // there should be no errors
            should.not.exist(err);
            // there should be a 200 status code
            res.status.should.equal(200);
            // the response should be JSON
            res.type.should.equal('application/json');
            done();
        });
    });
});