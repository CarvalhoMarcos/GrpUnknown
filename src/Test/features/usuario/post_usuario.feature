Feature: Cadastrar um usuario

    Cadastrar um determinado usuario

   Scenario: Cadastrar um usuário
   Given dado um cpf 111111452
   And nome Luis Henrique Machado
   And email luis.fontes@souunit.com.br
   And tipo_usuario P
   And password senha
   And sexo M
   And cor Branca
   When preenchido o form corretamente e feita a request
   Then a response é 
   """
   200
   """