Feature: Pegar médicos
    Conseguir pegar uma lista de todo os médicos

    Scenario: Tem que conseguir pegar a lista com todos os médicos 
    Given enviar uma request
    When quiser receber umas lista com todos os médicos
    Then recebe 
    """
    200
    """