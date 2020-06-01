Feature: Cadastrar Residente

   Enviar um formulário e conseguir cadastrar um residente

   Scenario: Cadastrar com sucesso um residente
   Given dado um cpf 111111111
   And nome Luis Henrique Machado
   And email Luis.fontes@souunit.com.br
   And tipo_usuario R
   And password senha
   And sexo M
   And cor Branca
   And ano_res 2016
   When esse form é preenchido
   Then uma request é enviado e recebe a resposta
   """
   200
   """