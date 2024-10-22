<?php

$file = './database.txt';

if (isset($_POST['dataGame'])) {
    file_put_contents($file, $_POST['dataGame'], FILE_APPEND);
    $location = 'Location: ../app/home.php?username=' . $_POST['username'];
    header($location);
} else {
    echo 'Erro ao salvar os dados';
}
