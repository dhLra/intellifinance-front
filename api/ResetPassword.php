<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");


class ResetPassword extends Conn
{
    public function resetPass()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramEmail = $dataObject['data']['email'];
        $paramPwd = $dataObject['data']['senha'];

        try {

            $PwdHash = password_hash($paramPwd, PASSWORD_DEFAULT);

            $UserExistis = $this->connBD()->prepare("UPDATE user_table SET password_hash = '$PwdHash', is_frist_login = '0' WHERE email = '$paramEmail'");
            $UserExistis->execute();

            echo json_encode(http_response_code());
            die();
        } catch (Exception $e) {
            echo json_encode(http_response_code());
            die();
        }
    }
}
