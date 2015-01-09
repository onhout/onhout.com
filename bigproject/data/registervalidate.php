<?php
require_once("config.php");
$postdata=file_get_contents("php://input");
$request=json_decode($postdata, TRUE);
@$userName = $request->userName;
@$email = $request->email;

validateregistration($userName, $email);
?>