const tipoExame = require("../../../models/TipoExame");
const { response } = require("express");


const define = require('jest-cucumber');

const request = require('supertest');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/TipoExame/get_tipoExame.feature");

define.defineFeature(feature, test => {
    test('Envia uma request e receber 200 com a lista de info do tipo Exame', ({
        given,
        when,
        then
    }) => {
        given('recebe info do tipo Exame', () => {

        });

        when('enviada uma request', async () => {
            response = await request(app)
                .get("/tipo_exame")
                .set("Accept", "application/json");
        });

        then('', (docString) => {
            expect(response.status).toBe(200);

        });
    });
});