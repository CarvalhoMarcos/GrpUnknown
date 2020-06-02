
const define = require('jest-cucumber');

const request = require('supertest');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/usuario/post_usuario.feature");

define.defineFeature(feature, test => {
    test('Cadastrar um usuário', ({ given, and, when, then }) => {
        objUser = {};
        var response;
        given(/^dado um cpf (.*)$/, (cpf) => {
            objUser['cpf'] = cpf;
        });

        and(/^nome (.*)$/, (nome) => {
            objUser['nome'] = nome;
        });

        and(/^email (.*)$/, (email) => {
            objUser['email'] = email;
        });

        and(/^tipo_usuario (.*)$/, (tipo_usuario) => {
            objUser['tipo_usuario'] = tipo_usuario;
        });

        and(/^password (.*)$/, (password) => {
            objUser['password'] = password;
        });

        and(/^sexo (.*)$/, (sexo) => {
            objUser['sexo'] = sexo;
        });

        and(/^cor (.*)$/, (cor) => {
            objUser['cor'] = cor;
        });

        and(/^data_nasc sendo (.*)\/(.*)\/(.*)$/, (day, month, year) => {
            let data = day + '/' + month + '/' + year;

            objUser['data_nasc'] = data;
        });

        when('preenchido o form corretamente e feita a request', async () => {
            response = await request(app)
                .post("/usuario")
                .send(objUser)
                .set('Accept', 'application/json');
        });

        then('a response é', (docString) => {
            expect(response.status).toEqual(200);
        });
    });
});