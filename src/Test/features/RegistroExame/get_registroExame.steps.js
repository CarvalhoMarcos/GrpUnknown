const tipoExame = require("../../../models/TipoExame");
const { response } = require("express");


const define = require('jest-cucumber');

const request = require('supertest');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/RegistroExame/get_registroExame.feature");

define.defineFeature(feature, test => {
    test('Envia uma request e receber 200 com a lista de info do registro do Exame', ({
        given,
        when,
        then
    }) => {
        given('recebe info do registro Exame', () => {

        });
        when('enviada uma request', async () => {
            response = await request(app)
                .get("/registrosExame")
                .set("Accept", "application/json");
        });

        then('', (docString) => {
            expect(response.status).toBe(200);

        });
    });
});