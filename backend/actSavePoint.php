<?php

$file = './database.txt';

if (isset($_GET['dataGame'])) {
    file_put_contents($file, $_GET['dataGame'], FILE_APPEND);
    $location = 'Location: ../app/home.php?id=' . $_GET['id'];
    header($location);
} else {
    echo 'Erro ao salvar os dados';
}