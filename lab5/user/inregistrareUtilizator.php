<?php
require_once 'validateData.php';
$name = $_POST['signName'];
$email = $_POST['signEmail'];
$psw = $_POST['signPassword'];
$pswCheck = $_POST['signPasswordCheck'];
$error = False;

if (err_name($name)) {
    $name = "Invalid NAME";
    $error = True;
}

if (err_email($email)) {
    $email = "Invalid EMAIL";
    $error = True;
}

if (err_psw($psw) && $psw != $pswCheck) {
    $psw = $pswCheck = "Invalid PASSWORD";
    $error = True;
}

if ($error == True) echo json_encode(array("status" => "FAIL"));
else echo json_encode(array("status" => "OK"));
?>