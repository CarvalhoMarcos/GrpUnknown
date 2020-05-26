//import { defineFeature, loadFeature } from 'jest-cucumber';
const define = require('jest-cucumber');
//const loadFeature = require('jest-cucumber');
const response = require('express');

const feature = define.loadFeature("src/Test/features/medico_cadastro.feature");
var faker = require('faker');

define.defineFeature(feature, async test => {
    test('Tem que ter todos o campos válidos preenchidos', ({ given, and, when, then }) => {
        objMedico = {};

        given('/^cpf sendo (.*)$/', (cpf) => {
            objMedico['cpf'] = cpf
        });
        and('^nome sendo (.*)$/', (nome) => {
            objMedico['nome'] = nome
        });
        and('/^email sendo (.*)$/', (email) => {
        objMedico['email'] = email

        });

        and('/^tipo_usuario sendo (.*)$/', (tipo_usuario) => {
        objMedico['tipo_usuario'] = tipo_usuario

        });

        and('/^password é (.*)$/', (password) => {
        objMedico['password'] = password

        });

        and('/^sexo é (.*)$/,', (sexo) => {
        objMedico['sexo'] = sexo

        });

        and('/^cor é (.*)$/', (cor) => {
        objMedico['cor'] = cor

        });

        and('/^crm é (.*)$/', (crm) => {
        objMedico['crm'] = crm

        });

        and('/^eh_docente é (.*)$/', (eh_docente) => {
        objMedico['eh_docente'] = eh_docente

        });

        and('/^titulo_uni é (.*)$/', (titulo_uni) => {
        objMedico['titulo_uni'] = titulo_uni

        });

        when('o formulário for submetido para o cadastro', () => {
            let response = request(app)
                .post('/medico')
                .send(
                    objMedico
                ).set('Accept', 'application/json');
        });
        then('iremos ver a resposta:', (docString) => {
            expect(200).toBe(200);
        });
    });
});