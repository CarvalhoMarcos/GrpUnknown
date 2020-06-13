Feature: Login

   Cada usuario entra com o cpf e a senha

   Scenario: Login
   Given cpf 111111111
   And password senha
   When a pessoa faz o acesso no site
   Then retorna 
   """
   200
   """
   