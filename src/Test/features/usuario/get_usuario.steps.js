const request = require('supertest');
const define = require('jest-cucumber');
const app = require('../../../app');

const feature = define.loadFeature('src/Test/features/usuario/get_usuario.feature');
define.defineFeature(feature, test => {
    test('Retornar com sucesso o usuario', ({
        given,
        when,
        then
    }) => {
        var user;
        given(/^dado um usuario (.*)$/, (usuario) => {
            user = usuario;
        });

        when('enviado uma request', async () => {
            response = await request(app)
                .get("/usuario" + "/" + user)
                .set("Accept", "application/json")
        });

        then('retorna uma response', (docString) => {
            expect(response.status).toEqual(200);
        });
    });
});