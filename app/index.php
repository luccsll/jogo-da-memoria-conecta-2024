<?php
include_once('head.php');

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Pares & Paradas - Jogo da memória | Nova Rota do Oeste</title>
</head>


<body class="d-flex-column">
    <section class="background" id="background"></section>

    <form action="" method="GET" class="formHome d-flex-column" id="formHome">
        <div class="divTitle d-lfex">
            <h1 class="h2-s title-index">Jogo da memória</h1>
            <p class="p-m subtitle-index">Nova Rota do Oeste</p>
        </div>

        <div class="fieldUsername" id="fieldUsername">

            <div class="fieldFormDefault">
                <label for="username" class="a-m">Informe sua matrícula</label>
                <input type="number" name="id" id="username" class="field" placeholder="00000000" required autocomplete="off" minlength="6" maxlength="8">
            </div>

            <div id="keyboard"></div>

        </div>

        <button type="button" class="p-m button-primary" id="buttonStart">Começar</button>
    </form>

    <script src='../public/js/background.js'></script>
    <script type="module" src='../public/js/index.js'></script>
</body>

</html>