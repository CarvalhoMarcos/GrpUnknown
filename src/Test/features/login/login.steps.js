
const define = require('jest-cucumber');
const request = require('supertest');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/login/login.feature");

define.defineFeature(feature, test => {

    test('Login', ({ given, and, when, then }) => {

        login = {};
        given(/^cpf (.*)$/, (cpf) => {
            login['cpf'] = cpf;

        });

        and(/^password (.*)$/, (senha) => {
            login['senha'] = senha;

        });

        when('a pessoa faz o acesso no site', async () => {
            response = await request(app)
                .post("/login")
                .send(login)
                .set('Accept', 'application/json');
        });
        console.log(response.body);
        

        then('retorna', (docString) => {
            expect(response.status).toBe(200);
            
        })
    });
});