<?php
require_once("config.php");
$postdata=file_get_contents("php://input");
validateregistration($postdata);
?>