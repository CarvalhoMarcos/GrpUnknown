const define = require('jest-cucumber');
const request = require('supertest');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/medico/delete_medico.feature");

define.defineFeature(feature, test => {

    test('Deletar um determinado médico', ({ given, when, then }) => {
        var CPF;
        var response

        given(/^dado um cpf sendo (.*)$/, (cpf) => {
            CPF = cpf;
            
        });

        when('passado os dados para deletar', async () => {
            response = await request(app)
                .delete('/medico/' + CPF)
                .set('Accept', 'application/json');
        });

        then('espera-se receber resposta', (docString) => {
            expect(response.status).toEqual(200);
        });
    });
});