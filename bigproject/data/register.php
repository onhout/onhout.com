<?php
require_once("config.php");
if(!empty($_POST))
{
	$userName = trim($_POST["userName"]);
	$first_name = trim($_POST["first_name"]);
	$last_name = trim($_POST["last_name"]);
	$email = trim($_POST["email"]);
	$password = trim($_POST["password"]);
	$business_name = trim($_POST["business_name"]);
	$business_address = trim($_POST["business_address"]);
    $business_phone = trim($_POST["business_phone"]);
    addUser();
?>