<?php
require_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$userData = [
@$userName => $request->userName,
@$first_name => $request->first_name,
@$last_name => $request->last_name,
@$email => $request->email,
@$password => $request->password,
@$busiess_name => $request->business_name,
@$business_address => $request->business_address,
@$business_phone => $request->business_phone,
];
addUser($userData);
/*
$userName = trim($_POST["userName"]);
$first_name = trim($_POST["first_name"]);
$last_name = trim($_POST["last_name"]);
$email = trim($_POST["email"]);
$password = trim($_POST["password"]);
$business_name = trim($_POST["business_name"]);
$business_address = trim($_POST["business_address"]);
$business_phone = trim($_POST["business_phone"]);*/

?>