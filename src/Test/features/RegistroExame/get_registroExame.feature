Feature: Pegar um registro dos exames

   Pegar um tipo exame e receber 200

   Scenario:  Envia uma request e receber 200 com a lista de info do registro do Exame
   Given recebe info do registro Exame
   When enviada uma request
   Then 
   """ 
   200
   """