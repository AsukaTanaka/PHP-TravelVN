<?php 

require_once("routes.php");

function openDB() {
    
    $host = HOST;
    $user = USER;
    $pass = PASS;
    $db = DB;
    
    $cn = mysqli_connect($host, $user, $pass, $db) or 
        // die("Connect failed: %s". $cn);
        die("Connect failed: ". mysqli_connect_error());

    return $cn;
}

function closeDB($cn) {

    mysqli_close($cn);
    // $cn->close();

}

?>