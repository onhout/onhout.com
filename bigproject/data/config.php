<?php
require_once("db_data.php");

//check if user or email exist in db
function validateregistration($userNameOrEmail)
{	global $mysqli;
	if (!filter_var($userNameOrEmail, FILTER_VALIDATE_EMAIL)){
		$result = $mysqli->query("SELECT userName FROM users WHERE userName = '".$userNameOrEmail."' LIMIT 1");
	} else {
		$result = $mysqli->query("SELECT email FROM users WHERE email = '".$userNameOrEmail."' LIMIT 1");
	}
	if ($result->num_rows >0){
		echo false;
	} else {
		echo true;
	}
}

//check if user && password match
function checkUserAndPassword($userName, $password)
{
	global $mysqli;
	$hashedPW = hash('sha512', $password);
	$dbUser = $mysqli->query("SELECT userName FROM users WHERE userName ='".$userName."' LIMIT 1");
	$dbPass = $mysqli->query("SELECT password FROM users WHERE password ='".$hashedPW."' LIMIT 1");
	if (($dbUser->num_rows>0) && ($dbPass->num_rows>0)){
		return true;
	} else {
		return false;
	}
}

//Retrieve complete user information by username
function fetchUserDetails($userName, $password)
{

	if(checkUserAndPassword($userName, $password)==true) {
		$column = "userName";
		$data = $userName;
	}
	global $mysqli;
	$stmt = $mysqli->prepare("SELECT
		id,
		userName,
		first_name,
		last_name,
		password,
		email,
		business_name,
		business_address,
		business_phone,
		website_email,
		order_db,
		last_sign_in_stamp
		FROM users
		WHERE
		$column = ?
		LIMIT 1");
		$stmt->bind_param("s", $data);

	$stmt->execute();
	$stmt->bind_result($id, $userName, $first_name, $last_name, $password, $email, $business_name, $business_address, $business_phone, $website_email, $order_db, $signIn);
	while ($stmt->fetch()){
		$row = array('id' => $id, 'userName' => $userName, 'first_name' => $first_name, 'last_name' => $last_name, 'password' => $password, 'email' => $email, 'business_name' => $business_name, 'business_address' => $business_address, 'business_phone' => $business_phone, 'website_email' => $website_email, 'order_db' => $order_db, 'last_sign_in_stamp' => $signIn);
	}
	$stmt->close();
	$json = json_encode($row);
	echo $json;
}

//add user to database in registration
function addUser($userData){
$daUserName = $userData["userName"];
$daFirstName = $userData["first_name"];
$daLastName = $userData["last_name"];
$daPassword = hash('sha512', $userData["password"]);
$daEmail = $userData["email"];
$daBusinessName = $userData["business_name"];
$daBusinessAddress = $userData["business_address"];
$daBusinessPhone = $userData["business_phone"];

    global $mysqli;
    $stmt = $mysqli->prepare("INSERT INTO users (
            userName,
            first_name,
            last_name,
            password,
            email,
            business_name,
            business_address,
            business_phone,
            website_email,
            order_db,
            last_sign_in_stamp
            )
            VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            'website email',
            'order database',
            '".time()."'
            )");

        $stmt->bind_param("ssssssss", $daUserName, $daFirstName, $daLastName, $daPassword, $daEmail, $daBusinessName, $daBusinessAddress, $daBusinessPhone);
        $stmt->execute();
        $stmt->close();
        echo json_encode($userData);
}
?>