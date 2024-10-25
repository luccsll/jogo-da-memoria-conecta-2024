<?php 

require_once('conn.php');
require_once('functions.php');

$sqlInstruction = "SELECT [ID], [Nome Integrante] FROM [crobi_pd].[PEO].[integrante_RM] WHERE [Data Desligamento] is NULL";
$query = query($conn, $sqlInstruction);

if ($query === false) {
    die('Erro ao executar a query: ' . odbc_errormsg($conn));
}

$data = [];
while ($row = odbc_fetch_array($query)) {
    $data[] = $row;
}

$file = '../backend/dataUsers.php';

if(file_put_contents($file, json_encode($data))){
    echo 'Dados salvo com sucesso!';
}




