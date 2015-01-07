<?php
require_once("config.php");
$postdata = file_get_contents("php://input");
$request =json_decode($postdata);
@$userName = $request->userName;
@$password = $request->password;
fetchUserDetails($userName, $password);