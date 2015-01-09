<?php
require_once("db_data.php");
/*//vars
private userName;
private first_name;
private last_name;
private password;
private email;
private business_name;
private business_address;
private business_phone;*/

//destroy a session
/*function destroySession($name){
    if (isset ($_SESSION[$name]){
        $_SESSION[$name] = NULL;
        unset($_SESSION[$name]);
    }
}*/
//check if user exist in db
function validateregistration($userName, $email)
{
	global $mysqli;
	if ($email == null){
		$stmt = $mysqli->prepare("SELECT
			userName
			FROM users
			WHERE
			userName = ?
			LIMIT 1");
		$stmt->bind_param("s", $userName);
		$stmt->execute();
		$stmt->bind_result($userExist);
		$stmt->fetch();
		if ($userExist == $userName){
			echo ("User Exist");
		} else {
			echo ("user don't exist");
		}
		$stmt->close();
	} else if ($userName == null){
		$stmt = $mysqli->prepare("SELECT
			email
			FROM users
			WHERE
			email = ?
			LIMIT 1");
		$stmt->bind_param("s", $email);
		$stmt->execute();
		$stmt->bind_result($emailExist);
		$stmt->fetch();
		if ($emailExist == $email){
			echo ("email Exist");
		} else {
			echo ("email don't exist");
		}
		$stmt->close();
	}
}

//check if user && password match
function checkUserAndPassword($userName, $password)
{
	global $mysqli;
	$hashedPW = hash('sha512', $password);
	$column = "userName";
	$data = $userName;
	if($userName!=NULL && $password!=NULL){

		$stmt = $mysqli->prepare("SELECT
		userName,
		password
		FROM users
		WHERE $column = ?
		LIMIT 1");
		$stmt->bind_param("s", $data);
		$stmt->execute();
		$stmt->bind_result($userNamePlaceHolder, $passwordPlaceHolder);
		while($stmt->fetch()){
			$checkUserName = ["user_name"=>$userNamePlaceHolder, "pass"=>$passwordPlaceHolder];
		}
		$stmt->close();
		if ($checkUserName["user_name"]== $userName && $checkUserName["pass"]  == $hashedPW){
			return true;
		} else{
			return false;
		}
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