<?php
include_once("Conn.php");

class LoginAuth extends Conn
{
    public function LoginAuth()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramEmail = $dataObject['data']['email'];
        $paramPass = $dataObject['data']['pass'];

        $Data = $this->connBD()->prepare("SELECT * FROM user_table WHERE email = '$paramEmail'");
        $Data->execute();

        $userDataArray = [];

        header('Access-Control-Allow-Origin: *');
        header("Content-Type: application/json");

        if ($Data and $Data->rowCount() != 0) {
            $row_user = $Data->fetch(PDO::FETCH_ASSOC);
            if (password_verify($paramPass, $row_user['password_hash'])) {
                $userDataArray = [
                    "id_user" => $row_user['id_user'],
                    "name" => $row_user['name'],
                    "email" => $row_user['email'],
                    "is_frist_login" => $row_user['is_frist_login'],
                    "status" => true,
                ];
                echo json_encode($userDataArray);
                die();
            } else {
                $userDataArray = [
                    "error" => "usuario ou senha invalidos",
                    "status" => false
                ];
                echo json_encode($userDataArray);
                die();
            }
        } else {
            $userDataArray = [
                "error" => "usuario ou senha invalidos",
                "status" => false
            ];
            echo json_encode($userDataArray);
            die();
        }
    }
}
