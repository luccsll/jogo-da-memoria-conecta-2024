<?php

$user = 'crobi';
$pass = 'Crobi2017';
$dsn = 'gameConecta';

$conn = odbc_connect($dsn, $user, $pass);

if(!$conn){
    echo 'Erro ao estabelecer conexão com o banco de dados!';
    die();
}

?>