Feature: Retornar o usuario

   Passar o usuario na url da request e retornar o mesmo

   Scenario: Retornar com sucesso o usuario
   Given dado um usuario "usuario"
   When enviado uma request
   Then retorna uma response 
   """
   200
   """