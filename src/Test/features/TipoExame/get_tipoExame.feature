Feature: Pegar um tipo exame

   Pegar um tipo exame e receber 200

   Scenario:  Envia uma request e receber 200 com a lista de info do tipo Exame
   Given recebe info do tipo Exame
   When enviada uma request
   Then 
   """ 
   200
   """