const define = require('jest-cucumber');

const request = require('supertest');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/medico/get_medico.feature");
var faker = require('faker');

define.defineFeature(feature, test => {
    test('Tem que conseguir pegar a lista com todos os médicos', ({
        given,
        when,
        then
    }) => {
        given('enviar uma request', () => {

        });

        when('quiser receber umas lista com todos os médicos', async () => {
            response = await request(app)
                .get('/medico')
                .set('Accept', 'application/json');
        });

        then('recebe', (docString) => {
            expect(response.status).toEqual(200);
        });
    });
});