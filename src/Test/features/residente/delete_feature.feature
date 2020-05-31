Feature: Deletar um residente

    Passa o cpf, faz a request e deleta um residente

    Scenario: Deletar um residente
        Given dado um cpf 11111111
        When enviado um request
        Then deverá receber a response
            """
            200
            """