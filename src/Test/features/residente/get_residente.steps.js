const define = require("jest-cucumber");
const request = require("supertest");
const app = require("../../../app");

const feature = define.loadFeature("src/Test/features/residente/get_residente.feature")
// import { request } from "express";

define.defineFeature(feature, test => {
    test('Pegar um determinado residente', ({
        given,
        when,
        then
    }) => {
        var CPF;
        var response;
        given(/^um cpf (.*)$/, (cpf) => {
            CPF = cpf;
        });

        when('enviado uma request', async () => {
            response = await request(app)
                .get('/residente/' + CPF)
                .set("Accept", "application/json");
        });

        then('recebe uma response', (docString) => {
            expect(response.status).toEqual(200);
        });
    });
});