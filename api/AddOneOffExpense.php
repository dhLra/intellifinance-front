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
        $paramAddress = $dataObject['data']['address'];
        $paramAddressNumber = $dataObject['data']['address_number'];
        $paramDistrict = $dataObject['data']['district'];
        $paramFederalState = $dataObject['data']['federal_state'];
        $paramCity = $dataObject['data']['city'];
        $paramDate = $dataObject['data']['date'];
        $paramEstablisment = $dataObject['data']['establishment'];
        $paramAmount = $dataObject['data']['amount'];
        $paramCategory = $dataObject['data']['category'];


        try {

            $OneOffExpense = $this->connBD()->prepare("INSERT INTO user_one_off_expense (`id_user`,`address`, `address_number`, `district`, `city`, `federal_state`, `establishment`, `amount`, `id_category`, `expense_date`, `situation`) 
            VAlUES ('$paramUserID', '$paramAddress', '$paramAddressNumber', '$paramDistrict', '$paramCity', '$paramFederalState', '$paramEstablisment', '$paramAmount', '$paramCategory','$paramDate', 'ACTIVE')");
            $OneOffExpense->execute();

            echo json_encode('Sucsses');
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
