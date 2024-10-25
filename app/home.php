<?php
include_once('head.php');

if(isset($_GET['id']) && $_GET['id'] != null){
    $id = $_GET['id'];
} else {
    die;
}

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
            <a href="ranking.php?id=<?= $id ?>" class="btnRanking d-flex-column"><img class="iconRanking" src="../public/images/icon/medalha.svg"><p class="small-m p-ranking">Ranking</p></a>
        </div>
        <div class="themes d-flex-column">
            <h2 class="p-m">Temas</h2>
            <div class="containerTheme d-flex-row">
                <div class="themeIten d-flex-column">
                    <a class="imgTheme imgTheme-placas" href="game.php?theme=p&id=<?= $id ?>"></a>
                    <p class="a-m typeIcon">Placas</p>
                </div>
                <div class="themeIten d-flex-column">
                    <a class="imgTheme imgTheme-veiculo" href="game.php?theme=v&id=<?= $id ?>"></a>
                    <p class="a-m typeIcon">Veículo</p>
                </div>
                <div class="themeIten d-flex-column">
                    <a class="imgTheme imgTheme-tema" href="game.php?theme=t&id=<?= $id ?>"></a>
                    <p class="a-m typeIcon">Projetos Manu & TI</p>
                </div>
                <div class="themeIten d-flex-column">
                    <a class="imgTheme imgTheme-gerencia" href="game.php?theme=l&id=<?= $id ?>"></a>
                    <p class="a-m typeIcon">Líderes</p>
                </div>
            </div>
        </div>
    </main>

    <script type="module" src="../public/js/home.js"></script>
</body>

</html>