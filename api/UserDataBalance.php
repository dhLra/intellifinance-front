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

        $TotalExpense = 0;

        try {

            $DataUserAmount = $this->connBD()->prepare("SELECT * FROM user_amount WHERE id_user = '$paramUserID'");
            $DataUserAmount->execute();

            $DataUserExpense = $this->connBD()->prepare("SELECT * FROM user_expense WHERE id_user = '$paramUserID' AND situation != 'DISABLED'");
            $DataUserExpense->execute();

            while ($FetchExpense = $DataUserExpense->fetch(PDO::FETCH_ASSOC)) {
                $TotalExpense = $FetchExpense['installments_value'] + $TotalExpense;
            }

            $DataBalance = $DataUserAmount->fetch(PDO::FETCH_ASSOC);
            $userDataArray = [
                "current_amount" => number_format($DataBalance['current_amount'], 2),
                "expense" => number_format($TotalExpense, 2),
                "diference" =>  number_format($DataBalance['current_amount'] - $TotalExpense, 2),
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
