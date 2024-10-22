<?php
include_once('head.php');

?>

<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="../public/css/game.css">
    <title>Home - Jogo da memória | Nova Rota do Oeste</title>
</head>

<body>
    <div class="leftFrame"></div>
    <div class="rightFrame"></div>

    <form class="modalFinished backgroundModal" id="modalFinished" method="POST" action="../backend/actSavePoint.php">
        <input type="hidden" id="globalVariable" name="dataGame">
        <input type="hidden" name="username" <?= 'value=' . $_GET['username'] ?>>
        <img class="flareGame" src="../public/images/Flares.svg">
        <div class="containerText d-flex-column">
            <h1 class="h2-m">Parabéns!</h1>
            <p class="a-md textFinished">Você encontrou todos os pares</p>
            <div class="tablePoints">
                <p>Tempo: <span id="pointTimePlacar"></span></p>
                <p>Clicks: <span id="pointClickPlacar"></span></p>
            </div>
            <div class="divButtons d-flex-row">
                <button type="submit" class="button-finished button-primary p-m">Voltar ao menu</button>
            </div>
        </div>
        <div class="confete"></div>
    </form>

    <div class="countdown backgroundModal" id="countdown">
        <div class="countdownBox">
            <img src="../public/images/icon/play.svg" id="buttonStart">
            <p class="cianWord tittle-b" id="textCountDown"></p>
            <p class="a-m" id="textStarted">Começar</p>
        </div>
    </div>

    <div class="modalSetting backgroundModal" id="modalSetting">
        <div class="boxModalSetting">

            <div class="modalSetting-header d-flex-row">
                <p class="p-m">Configurações</p>
                <button type="button" role="button" class="buttonExit" id="buttonExit"><img src="../public/images/icon/close.svg" alt=""></button>
            </div>
            <div class="modalSetting-main d-flex-column">
                <p class="titleModalSetting a-m textGray">Som do jogo</p>
                <div class="fieldForm">
                    <label for="" class="small-m textGray">Volume</label>
                    <input type="range" class="inputRange" id="inputRangeVolume" min='0' max='4' value="2">
                </div>
                <div class="fieldForm">
                    <label for="" class="small-m textGray">Musica</label>
                    <button class="buttonSound" id="buttonSound" type="button" role="button">
                        <img src="../public/images/icon/volume_up.svg" class="iconSound">
                        <img src="../public/images/icon/volume_off.svg" class="iconSound soundMuted">
                    </button>
                </div>
            </div>
            <button class="button-outline buttonExitGame" type="button" role="button">Sair do jogo</button>
        </div>
    </div>

    <div class="boxButtonSetting">
        <span></span>
        <button type="button" class="buttonSetting" id="buttonSetting">
            <img src="../public/images/icon/settings.svg">
        </button>
    </div>

    <header class="d-flex-column divTitle">
        <h1 class="h2-m">GAME</h1>
        <p class="a-m subtitle-index">Tema: <span class="greenWord" id="gameTheme">Placas</span></p>
    </header>
    <main class="main d-flex-column">
        <div class="scoreboard d-flex-row">
            <div class="boxMain time">
                <p class="label-m">TEMPO</p>
                <p class="p-m greenWord" id="timer"><span class="p-m" id="scoreboardMinutes">00</span>:<span id="scoreboardSeconds" class="p-m">00</span></p>
            </div>
            <div class="boxMain click">
                <p class="label-m">CLICKS</p>
                <p class="p-m greenWord" id="scoreClick">0</p>
            </div>
        </div>
        <div class="contentMain d-flex-row" id="contentMain"></div>
    </main>

    <script src="../public/js/game.js"></script>
</body>

</html>