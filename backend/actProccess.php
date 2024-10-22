<?php
$file = 'tableUser.txt';

if(isset($_GET['username'])){
    $dataUser = "{" . $_GET['username'] . "}";
    file_put_contents($file, $dataUser, FILE_APPEND);

    $location = 'Location: ../app/home.php?username=' . $_GET['username'];
    header($location);
}

?>