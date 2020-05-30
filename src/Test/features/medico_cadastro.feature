Feature: Cadastrar Medico

   Cadastrar um médico na api assim q feita a requisição.

   Scenario: Tem que ter todos o campos válidos preenchidos
      Given cpf sendo 111111112
      And nome sendo Luis Henrique
      And email sendo luis.fontes@souunit.com.br
      And tipo_usuario sendo M
      And password é 12345
      And data_nasc sendo 12/03/1990
      # And sexo é "M"
      # And cor é "Branca"
      # And crm é "12434124123"
      # And eh_docente é "true"
      # And titulo_uni é "Cardiologista"
      When o formulário for submetido para o cadastro
      Then iremos ver a resposta:
         """
         200
         """
