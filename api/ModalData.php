<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");


class ModalData extends Conn
{
    public function getModalData()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];

        $ArrayMonth = [];
        $Index = 0;

        try {

            $DataUserAmount = $this->connBD()->prepare("SELECT current_amount FROM user_amount WHERE id_user = '$paramUserID'");
            $DataUserAmount->execute();

            $DataMonth = $this->connBD()->prepare("SELECT * FROM table_month ");
            $DataMonth->execute();

            $DataBalance = $DataUserAmount->fetch(PDO::FETCH_ASSOC);

            while ($Month = $DataMonth->fetch(PDO::FETCH_ASSOC)) {
                $ArrayMonth[$Index] = [
                    "id_month" => $Month['id_month'],
                    "name" => $Month['name'],
                ];
                $Index++;
            }
            $dataModal = [
                "current_amount" => number_format($DataBalance['current_amount'], 2),
                "month" => $ArrayMonth,
                "status" => '200'
            ];

            echo json_encode($dataModal);
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
