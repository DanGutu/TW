<?php
function err_name($name) {
    if ((strlen($name) < 2) || !preg_match ("/^[a-zA-z]*$/", $name)) {
        return True;
    }
    return False;
}

function err_email($email) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return True;
    }
    return False;
}

function err_psw($password) {
    if (strlen($password) < 6) {
        return True;
    }
    return False;
}
?>