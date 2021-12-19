<?php
require_once 'validateData.php';
$email = $_POST['email'];
$psw = $_POST['password'];
$error = False;

if (err_email($email) || err_psw($psw)) {
    $error = True;
}

if ($error == True) echo json_encode(array("status" => "FAIL"));
else echo json_encode(array("status" => "OK"));
?>