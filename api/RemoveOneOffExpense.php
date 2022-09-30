<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");
date_default_timezone_set('America/Sao_Paulo');

class RemoveOneOffExpense extends Conn
{
    public function RemoveOneOffExpense()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];
        $paramExpendID = $dataObject['data']['id_expend'];
        $paramDate = date('Y-n-j H:i:s A');

        try {
            $DataAmount = $this->connBD()->prepare("UPDATE user_one_off_expense SET situation='DISABLED', remove_date='$paramDate' WHERE id_user = '$paramUserID' AND id_expend = '$paramExpendID'");
            $DataAmount->execute();

            echo json_encode('Sucsses');
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
