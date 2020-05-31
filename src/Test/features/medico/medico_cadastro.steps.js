const define = require('jest-cucumber');
const moment = require("moment");

//const response = require('express');

const request = require('supertest');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/medico/medico_cadastro.feature");
var faker = require('faker');


define.defineFeature(feature, test => {
    test('Tem que ter todos o campos válidos preenchidos', ({ given, and, when, then }) => {
        objMedico = {};
        var response;

        given(/^cpf sendo (.*)$/, (cpf) => {
            objMedico['cpf'] = cpf;
        });
        and(/^nome sendo (.*)$/, (nome) => {
            objMedico['nome'] = nome;
        });

        and(/^email sendo (.*)$/, (email) => {
            objMedico['email'] = email;
        });

        and(/^tipo_usuario sendo (.*)$/, (tipo_usuario) => {
            objMedico['tipo_usuario'] = tipo_usuario;
        });

        and(/^password é (.*)$/, (password) => {
            objMedico['password'] = password;
        });

        and(/^data_nasc sendo (.*)\/(.*)\/(.*)$/, (day, month, year) => {
            let data = day + '/' + month + '/' + year;

            objMedico['data_nasc'] = data;
            console.log(objMedico['data_nasc']);
        });

        // and(/^sexo é (.*)$/, (sexo) => {
        // objMedico['sexo'] = sexo;
        // });

        // and(/^cor é (.*)$/, (cor) => {
        // objMedico['cor'] = cor;
        // });

        // and(/^crm é (.*)$/, (crm) => {
        // objMedico['crm'] = crm;
        // });

        // and(/^eh_docente é (.*)$/, (eh_docente) => {
        // objMedico['eh_docente'] = eh_docente;
        // });

        // and(/^titulo_uni é (.*)$/, (titulo_uni) => {
        // objMedico['titulo_uni'] = titulo_uni;
        // });

        when('o formulário for submetido para o cadastro', async () => {
            response = await request(app)
                .post('/medico')
                .send(
                    objMedico
                ).set('Accept', 'application/json');
        });
        then('iremos ver a resposta:', (docString) => {
            expect(response.status).toEqual(200);
        });
    });
});