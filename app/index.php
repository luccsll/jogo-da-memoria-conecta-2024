<?php
include_once('head.php');

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Pares & Paradas - Jogo da memória | Nova Rota do Oeste</title>
</head>

<body class="d-flex-column">
    <section class="background" id="background"></section
    >
    <!-- <div class="alert" id="alert">
        <img src="../public/images/icon/warning.svg">
        <div class="contentAlert">
            <p>Alerta</p>
            <p>Digite um apelido valido!</p>
        </div>
    </div> -->

    <form action="proccess.php" method="GET" class="formHome d-flex-column" id="formHome">
        <div class="divTitle d-lfex">
            <h1 class="h2-s title-index">Jogo da memória</h1>
            <p class="p-m subtitle-index">Nova Rota do Oeste</p>
        </div>

        <div class="field fieldUsername" id="fieldUsername">
            <label for="" class="a-m">Nome / Apelido</label>
            <input type="text" name="username" id="username" class="field" placeholder="lucas123" required autocomplete="off">
        </div>

        <!-- <button type="button" class="p-m button-primary" id="buttonStart">Começar</button> -->
        <a href="home.php" class="p-m button-primary" id="buttonStart">Começar</button>
    </form>

    <script src='../public/js/background.js'></script>
    <script src='../public/js/index.js'></script>
</body>

</html>