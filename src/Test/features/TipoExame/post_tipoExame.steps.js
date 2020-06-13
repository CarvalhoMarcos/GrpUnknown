const tipoExame = require("../../../models/TipoExame");
const { response } = require("express");


const define = require('jest-cucumber');

const request = require('supertest');
const app = require('../../../app');

const feature = define.loadFeature("src/Test/features/TipoExame/post_tipoExame.feature");

define.defineFeature(feature, test => {
    test('Envia um form com os nome_exame, recomendacoes e receber 200', ({ given, and, when, then }) => {
        objTipoExame = {};
        var response;
        given(/^nome_exame (.*)$/, (nome_exame) => {
            objTipoExame['nome_exame'] = nome_exame;
        });

        and(/^recomendacoes (.*)$/, (recomendacoes) => {
            objTipoExame['recomendacoes'] = recomendacoes;
        });

        when('preenchido e enviado o form', async () => {
            response = await request(app)
                .post("/tipo_exame")
                .send(objTipoExame)
                .set('Accept', 'application/json');
        });

        then('', (docString) => {
            expect(response.status).toBe(200);
        });
    });
});