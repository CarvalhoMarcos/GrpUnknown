Feature: Cadastrar um usuario

    Cadastrar um determinado usuario

    Scenario: Cadastrar um usuário
        Given dado um cpf 729415878
        And nome Luis Henrique Machado
        And email luis.fontes@souunit.com.br
        And tipo_usuario P
        And password senha
        And sexo M
        And cor Branca
        And data_nasc sendo 19/03/1995
        When preenchido o form corretamente e feita a request
        Then a response é
            """
            200
            """