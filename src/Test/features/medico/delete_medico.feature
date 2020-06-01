Feature: Deletar medico

   Tem que conseguir deletar um determinado medico

   Scenario: Deletar um determinado médico
   Given dado um cpf sendo 111111162
   When passado os dados para deletar
   Then espera-se receber resposta 
   """
   200
   """