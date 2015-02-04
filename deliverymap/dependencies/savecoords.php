<?php
$postdata = file_put_contents("mapjson/lakeshore.json", $_POST['json']);
$request = json_decode($postdata);
?>