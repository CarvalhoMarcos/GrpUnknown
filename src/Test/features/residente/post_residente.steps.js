const define = require('jest-cucumber');
const app = require('../../../app');
const request = require('supertest');

const feature = define.loadFeature('src/Test/features/residente/residente_post.feature')

define.defineFeature(feature, test => {
    test('Cadastrar com sucesso um residente', ({
        given,
        and,
        when,
        then
    }) => {
        objResidente = {};
        given(/^dado um cpf (.*),$/, (cpf) => {
            objResidente['cpf'] = cpf;
        });

        and(/^nome (.*),$/, (nome) => {
            objResidente['nome'] = nome;
        });

        and(/^email (.*),$/, (email) => {
            objResidente['email'] = email;
        });

        and(/^tipo_usuario (.*),$/, (tipo_usuario) => {
            objResidente['tipo_usuario'] = tipo_usuario;
        });

        and(/^password (.*),$/, (password) => {
            objResidente['password'] = password;
        });

        and(/^sexo (.*),$/, (sexo) => {
            objResidente['sexo'] = sexo;
        });

        and(/^cor (.*),$/, (cor) => {
            objResidente['cor'] = cor;
        });

        and(/^ano_res (.*)$/, (ano_res) => {
            objResidente['ano_res'] = ano_res;
        });

        when('esse form é preenchido', async () => {
            response = await request(app)
                .post('/residente')
                .send(objResidente)
                .set('Accept', 'application/json');
        });

        then('uma request é enviado e recebe a resposta', (docString) => {
            expect(response.status).toEqual(200);
        });
    });
});