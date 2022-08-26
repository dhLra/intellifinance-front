<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");
date_default_timezone_set('America/Sao_Paulo');

class RemoveBalance extends Conn
{
    public function RemoveBalance()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];
        $paramAmount = $dataObject['data']['amount'];
        $paramDate = date('Y-n-j H:i:s A');

        try {
            $DataAmount = $this->connBD()->prepare("SELECT current_amount FROM user_amount WHERE id_user = '$paramUserID'");
            $DataAmount->execute();

            if ($DataAmount and $DataAmount->rowCount() != 0) {
                $UserAmount = $DataAmount->fetch(PDO::FETCH_ASSOC);
                $CurrentAmount = $UserAmount['current_amount'];

                if ($CurrentAmount >= $paramAmount) {
                    $TotalAmount = $CurrentAmount - $paramAmount;
                    $RemoveAmount = $this->connBD()->prepare("UPDATE user_amount SET current_amount='$TotalAmount', modification_date='$paramDate' WHERE id_user = '$paramUserID'");
                    $RemoveAmount->execute();

                    $Movimentation = $this->connBD()->prepare("INSERT INTO user_movimentation (`id_user`, `amount`, `add_or_remove`, `date`) VAlUES ('$paramUserID', '$paramAmount', 'Remove', '$paramDate')");
                    $Movimentation->execute();
                } else {
                    echo json_encode('Saldo Insuficiente');
                    die();
                }
            }
            echo json_encode('Sucsses');
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
