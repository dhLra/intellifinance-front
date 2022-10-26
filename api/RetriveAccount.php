<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");


class RetriveAccount extends Conn
{
    public function UserExistis()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramEmail = $dataObject['data']['email'];

        try {

            $UserExistis = $this->connBD()->prepare("SELECT email FROM user_table WHERE email = '$paramEmail'");
            $UserExistis->execute();

            $FetchExistis = $UserExistis->fetch(PDO::FETCH_ASSOC);

            if(isset($FetchExistis)){
                $userData = [
                    "email" => $FetchExistis['email'],
                    "existis" => true
                ];
            } else {
                $userData = [
                    "existis" => false
                ];
            }

            echo json_encode($userData);
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
