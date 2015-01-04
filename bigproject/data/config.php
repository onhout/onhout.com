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
function userName($userName)
{
	global $mysqli,$db_table_prefix;
	$stmt = $mysqli->prepare("SELECT active
		FROM users
		WHERE
		userName = ?
		LIMIT 1");
	$stmt->bind_param("s", $userName);
	$stmt->execute();
	$stmt->store_result();
	$num_returns = $stmt->num_rows;
	$stmt->close();

	if ($num_returns > 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

//Retrieve complete user information by username
function fetchUserDetails($userName=NULL)
{
	if($userName!=NULL) {
		$column = "userName";
		$data = $userName;
	}
	global $mysqli,$db_table_prefix;
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
		$row = array('id' => $id, 'user_name' => $userName, 'first_name' => $first_name, 'last_name' => $last_name, 'password' => $password, 'email' => $email, 'business_name' => $business_name, 'business_address' => $business_address, 'business_phone' => $business_phone, 'website_email' => $website_email, 'order_db' => $order_db, 'last_sign_in_stamp' => $signIn);
	}
	$stmt->close();
	$json = json_encode($row);
	echo $json;
}

function addUser(){
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

        $stmt->bind_param("ssssssss", $this->userName, $this->displayname, $secure_pass, $this->clean_email, $this->activation_token, $this->user_active);
        $stmt->execute();
        $inserted_id = $mysqli->insert_id;
        $stmt->close();
}
?>