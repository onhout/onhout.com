<?php
$filename = $_POST['filename'];
$postdata = file_put_contents("mapjson/".$filename.".json", $_POST['json']);
$request = json_decode($postdata);
?>