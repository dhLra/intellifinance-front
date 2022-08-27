<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");


class UserDataBalace extends Conn
{
    public function UserDataBalance()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];

        try {

            $DataUserAmount = $this->connBD()->prepare("SELECT * FROM user_amount WHERE id_user = '$paramUserID'");
            $DataUserAmount->execute();
            
            $DataBalance = $DataUserAmount ->fetch(PDO::FETCH_ASSOC);
            $userDataArray = [
                "current_amount" => $DataBalance['current_amount'],
                "modification_date" => $DataBalance['modification_date'],
                "status" => '200'
            ];

            echo json_encode($userDataArray);
            die();

        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
