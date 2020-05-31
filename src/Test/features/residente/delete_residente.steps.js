const define = require('jest-cucumber');
const app = require('../../../app');
const request = require('supertest');

const feature = define.loadFeature('src/Test/features/residente/delete_feature.feature');

define.defineFeature(feature, test => {
    test('Deletar um residente', ({
        given,
        when,
        then
    }) => {
        var CPF;
        given(/^dado um cpf (.*)$/, (cpf) => {
            CPF = cpf;
        });

        when('enviado um request', async () => {
            response = await request(app)
                .delete('/residente' + "/" + CPF)
                .set("Accept", "application/json");
        });

        then('deverá receber a response', (docString) => {
            expect(response.status).toEqual(200);

        });
    });
});