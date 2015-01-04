<?php

$db_host = "localhost"; //Host address (most likely localhost)
$db_name = "myclassa_onlineOrderDB"; //Name of Database
$db_user = "myclassa_onhout"; //Name of database user
$db_pass = "theroadtoglory"; //Password for database user

$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
GLOBAL $mysqli;

session_start();

if(isset($_SESSION["onlineOrderOrganizer"]) && is_object($_SESSION["onlineOrderOrganizer"]))
{
	$loggedInUser = $_SESSION["onlineOrderOrganizer"];
}

?>