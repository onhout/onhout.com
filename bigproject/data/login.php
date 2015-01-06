<?php
require_once("config.php");
$postdata = file_get_contents("php://input");
$request =json_decode($postdata);
@$userName = $request->userName;
@$password = $request->password;
fetchUserDetails($userName, $password);
/* $loggedInUser = new loggedInUser();
$loggedInUser->user_id = $userdetails["id"];
$loggedInUser->userName = $userdetails["userName"];
$loggedInUser->email = $userdetails["email"];
$loggedInUser->hash_pw = $userdetails["password"];
$loggedInUser->business_name = $userdetails["business_name"];
$loggedInUser->business_address = $userdetails["business_address"];
$loggedInUser->business_phone = $userdetails["business_phone"]
$_SESSION["onlineOrderOrganizer"] = $loggedInUser;*/

?>