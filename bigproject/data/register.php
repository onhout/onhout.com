<?php
require_once("config.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata, TRUE);//TRUE WILL TURN IT INTO AN ARRAY

addUser($request);
?>