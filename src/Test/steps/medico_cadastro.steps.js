import { defineFeature, loadFeature } from 'jest-cucumber';
const  Medico = require ("../controller/MedicoController");
import { response } from 'express';

const feature = loadFeature('../Test/features/medico_cadastro.feature');
var faker = require('faker');

defineFeature(feature, async test => {
    test('Cadastro de médico', ({ given, when, then }) => {
        let medico;

        given('Eu sou um médico e desejo me cadastrar', () => {
          medico = new Medico();
            const email = faker.internet.email();
            const nome = faker.name();
            const password = faker.internet.password();
            const cpf = "111111112";
            const tipo_usuario = "M";
            const sexo = "M";
            const cor = "Branca";
            const crm = 12434124121;
            const eh_docente = true;
            const titulo_uni = "Cardiologista";
            const data_nasc = faker.date.past()
        });
        when('Eu submeto o form', () => {
            let response = request(medico)
                .post('localhost:4003/medico')
                .send({
                    cpf: cpf,
                    nome: nome,
                    email: email,
                    tipo_usuario: tipo_usuario,
                    password: password,
                    sexo: sexo,
                    cor: cor,
                    crm: crm,
                    eh_docente: eh_docente,
                    titulo_uni: titulo_uni,
                    data_nasc: data_nasc
                }).set('Accept', 'application/json');
        });
        then('recebo a resposta 200', () => {
            expect(response.status).toEqual(200);
        });
    });
});