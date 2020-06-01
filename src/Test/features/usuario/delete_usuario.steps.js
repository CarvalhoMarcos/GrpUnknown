const request = require('supertest');
const define = require('jest-cucumber');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/usuario/delete_usuario.feature");

define.defineFeature(feature, test => {
    test('Deletar um user com sucesso', ({
        given,
        and,
        when,
        then
    }) => {

        var CPF;
        var tipoUsuario;
        var response;

        given(/^dado um cpf (.*)$/, (cpf) => {
            CPF = cpf;
        });

        and(/^tipo_usuario (.*)$/, (tipo_usuario) => {
            tipoUsuario = tipo_usuario;
        });

        when('feito a request', async () => {
            response = await request(app)
                .delete("/usuario" + "/" + CPF + "/" + tipoUsuario)
                .set("Accept", "application/json");
        });

        then('a response é', (docString) => {
            console.log(response.body);
            console.log(response.status);
            
            expect(response.status).toEqual(200);
        });
    });
});