Feature: Compra Exitosa

    Compra exitosa en plataforma

    Scenario: Compra exitosa
        Given un cliente con acceso a la plataforma "https://www.vinoteca.com"
        When seleccione los productos preferidos de la seccion "Promociones"
        Then podra realizar el pago de manera exitosa