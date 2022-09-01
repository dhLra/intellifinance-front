<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");
date_default_timezone_set('America/Sao_Paulo');

class AddFixedExpend extends Conn
{
    public function AddFixedExpend()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];
        $paramFactor = $dataObject['data']['factor'];
        $paramCaterogy = $dataObject['data']['category'];
        $paramAmount = $dataObject['data']['amount'];
        $paramExpendNumber = $dataObject['data']['expend_number'];
        $paramMonthStart = $dataObject['data']['month_start'];
        $paramMonthEnd = $dataObject['data']['month_end'];
        $paramDate = date('Y-n-j H:i:s A');

        try {

            $Movimentation = $this->connBD()->prepare("INSERT INTO user_expense (`id_user`,`factor`, `category`, `installments_value`, `installments_number`, `installments_start`, `installments_end`, `date`) 
            VAlUES ('$paramUserID', '$paramFactor', '$paramCaterogy', '$paramAmount', '$paramExpendNumber', '$paramMonthStart', '$paramMonthEnd', '$paramDate')");
            $Movimentation->execute();

            echo json_encode('Sucsses');
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
