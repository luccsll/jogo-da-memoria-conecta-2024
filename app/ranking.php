<?php
include_once('head.php');

?>

<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="../public/css/ranking.css">
    <title>Home - Jogo da memória | Nova Rota do Oeste</title>
</head>

<body>
    <div class="leftFrame"></div>
    <div class="rightFrame"></div>
    <header class="d-flex-column divTitle">
        <h1 class="h2-m">Ranking</h1>
        <p class="a-m subtitle-index">Jogo da memória</p>
    </header>
    <main class="main d-flex-column">
        <div class="rankingTop3 d-flex-row">
            <div class="top top2 d-flex-column">
                <p class="a-m" id="nameWinner2">Carlos</p>
                <div class="topPoints d-flex-column">
                    <p class="label-m"><span id="nameWinner2-click">24</span> Clicks</p>
                    <p class="label-m"><span id="nameWinner2-min">2:02</span> Min</p>
                </div>
                <span class="top2-bar">
                    <p class="p-m">2°</p>
                </span>
            </div>
            <div class="top top1 d-flex-column">
                <img src="../public/images/Flares.svg" class="flare">
                <p class="a-m" id="nameWinner1">Carlos</p>
                <img src="../public/images/icon/trofeu.svg" class="trofeu">
                <span class="top1-bar">
                    <p class="p-m">1°</p>
                </span>
            </div>
            <div class="top top3 d-flex-column">
                <p class="a-m" id="nameWinner3">Carlos</p>
                <div class="topPoints d-flex-column">
                    <p class="label-m"><span id="nameWinner3-click">24</span> Clicks</p>
                    <p class="label-m"><span id="nameWinner3-min">2:02</span> Min</p>
                </div>
                <span class="top3-bar">
                    <p class="p-m">3°</p>
                </span>
            </div>
        </div>
        <div class="containerTable">
            <table class="tableRanking" id="tableRanking">
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th class="greenWord">Jogador(a)</th>
                        <th>Tema</th>
                        <th>Clicks</th>
                        <th>Tempo</th>
                    </tr>
                </thead>
                <tbody id="tbodyRanking">
                    <tr class="skeletonRow">
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                    </tr>
                    <tr class="skeletonRow">
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                    </tr>
                    <tr class="skeletonRow">
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                    </tr>
                    <tr class="skeletonRow">
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                    </tr>
                    <tr class="skeletonRow">
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                    </tr>
                    <tr class="skeletonRow">
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                    </tr>
                    <tr class="skeletonRow">
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                        <td><span class="skeleton"></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>

    <script src="../public/js/ranking.js"></script>
</body>

</html>