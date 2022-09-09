<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");

class AddOneOffExpense extends Conn
{
    public function AddOneOffExpense()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];
        $paramStreet = $dataObject['data']['street'];
        $paramNumber = $dataObject['data']['number'];
        $paramDistrict = $dataObject['data']['district'];
        $paramCity = $dataObject['data']['city'];
        $paramDate = $dataObject['data']['date'];
        $paramEstablisment = $dataObject['data']['establishment'];
        $paramAmount = $dataObject['data']['amount'];
        $paramCategory = $dataObject['data']['category'];


        try {

            $OneOffExpense = $this->connBD()->prepare("INSERT INTO user_one_off_expense (`id_user`,`address`, `address_number`, `district`, `city`, `establishment`, `amount`, `id_category`, `expense_date`) 
            VAlUES ('$paramUserID', '$paramStreet', '$paramNumber', '$paramDistrict', '$paramCity', '$paramEstablisment', '$paramAmount', '$paramCategory','$paramDate')");
            $OneOffExpense->execute();

            echo json_encode('Sucsses');
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
