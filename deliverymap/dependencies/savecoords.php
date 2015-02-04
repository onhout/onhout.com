<?php
$postdata = file_put_contents("mapjson/lakeshore.json", $_POST['polybounds']);
$request = json_decode($postdata);
?>