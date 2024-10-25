<?php 

function query($conn, $String){
    return odbc_exec($conn, $String);
}