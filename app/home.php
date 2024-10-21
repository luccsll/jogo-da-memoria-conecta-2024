<?php
include_once('head.php');

?>

<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="../public/css/home.css">
    <title>Home - Jogo da memória | Nova Rota do Oeste</title>
</head>

<body>
    <div class="leftFrame"></div>
    <div class="rightFrame"></div>
    <header class="d-flex-column divTitle">
        <h1 class="h2-m">Jogo da memória</h1>
        <p class="a-m subtitle-index">Nova Rota do Oeste</p>
    </header>
    <main class="main d-flex-column">
        <div class="actions d-flex-row">
            <div class="points d-flex-column">
                <small class="textPoints small-m">Sua melhor pontuação</small>
                <div class="contentPoints d-flex-row">
                    <p class="a-m">35 Clicks</p>|<p class="a-m">4 Min</p>
                </div>
            </div>
            <a href="ranking.php" class="btnRanking d-flex-column"><img class="iconRanking" src="../public/images/icon/medalha.svg"><p class="small-m p-ranking">Ranking</p></a>
        </div>
        <div class="themes d-flex-column">
            <h2 class="p-m">Temas</h2>
            <div class="containerTheme d-flex-row">
                <div class="themeIten d-flex-column">
                    <a class="imgTheme imgTheme-placas" href="game.php?theme=p"></a>
                    <p class="p-m typeIcon">Placas</p>
                </div>
                <div class="themeIten d-flex-column">
                    <a class="imgTheme imgTheme-veiculo" href="game.php?theme=v"></a>
                    <p class="p-m typeIcon">Veículo</p>
                </div>
                <div class="themeIten d-flex-column">
                    <a class="imgTheme imgTheme-tema" href="game.php?theme=t"></a>
                    <p class="p-m typeIcon">Tema</p>
                </div>
                <div class="themeIten d-flex-column">
                    <a class="imgTheme imgTheme-gerencia" href="game.php?theme=g"></a>
                    <p class="p-m typeIcon">Gerência</p>
                </div>
            </div>
        </div>
    </main>
</body>

</html>