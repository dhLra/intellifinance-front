<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");

class AddBalance extends Conn
{
    public function AddBalance()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];
        $paramAmount = $dataObject['data']['amount'];
        $paramDate = date('Y-m-d');

        try {
            $DataAmount = $this->connBD()->prepare("SELECT current_amount FROM user_amount WHERE id_user = '$paramUserID'");
            $DataAmount->execute();

            if ($DataAmount and $DataAmount->rowCount() != 0) {
                $UserAmount = $DataAmount->fetch(PDO::FETCH_ASSOC);
                $CurrentAmount = $UserAmount['current_amount'];
            }

            $TotalAmount = $CurrentAmount + $paramAmount;

            $AddAmount = $this->connBD()->prepare("UPDATE user_amount SET current_amount=$TotalAmount, modification_date=$paramDate WHERE id_user = '$paramUserID'");
            $AddAmount->execute();

            $Movimentation = $this->connBD()->prepare("INSERT INTO user_movimentation (`id_user`, `amount`, `add_or_remove`, `date`) VAlUES ('$paramUserID', '$paramAmount', 'Add', $paramDate)");
            $Movimentation->execute();
            echo json_encode('Sucsses');
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
