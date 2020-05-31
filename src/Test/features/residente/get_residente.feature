Feature: Pegar um residente

   Passar o cpf e pegar um determinado residente

   Scenario: Pegar um determinado residente
   Given um cpf 111111111
   When enviado uma request
   Then recebe uma response
   """
   200
   """