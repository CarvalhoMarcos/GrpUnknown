Feature: Deletar um determinado usuario

   passo o cpf e o tipo do user na url para a deleção do mesmo

   Scenario: Deletar um user com sucesso
   Given dado um cpf 111111111
   And tipo_usuario M 
   When feito a request
   Then a response é 
   """
   200
   """