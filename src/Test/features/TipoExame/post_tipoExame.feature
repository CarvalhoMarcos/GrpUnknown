Feature: Cadastrar um tipo exame

   Cadastrar um tipo exame e receber 200

   Scenario:  Envia um form com os nome_exame, recomendacoes e receber 200
   Given nome_exame sangue
   And recomendacoes ficar em jejun
   When preenchido e enviado o form
   Then 
   """ 
   200
   """