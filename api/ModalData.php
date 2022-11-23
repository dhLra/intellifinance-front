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
        $ArrayExpense = [];
        $Index = 0;

        try {

            $DataUserAmount = $this->connBD()->prepare("SELECT current_amount FROM user_amount WHERE id_user = '$paramUserID'");
            $DataUserAmount->execute();
            $DataBalance = $DataUserAmount->fetch(PDO::FETCH_ASSOC);

            $DataExpense = $this->connBD()->prepare("SELECT * FROM user_expense WHERE id_user = '$paramUserID' AND situation != 'DISABLED'");
            $DataExpense->execute();

            while ($AllDataExpense = $DataExpense->fetch(PDO::FETCH_ASSOC)) {
                $ArrayExpense[$Index] = [
                    "id_expend" => $AllDataExpense['id_expend'],
                    "factor" => $AllDataExpense['factor'],
                    "category" => $AllDataExpense['id_category'],
                    "installments_value" => $AllDataExpense['installments_value'],
                    "installments_number" => $AllDataExpense['installments_number'],
                    "installments_start" => $AllDataExpense['installments_start'],
                    "installments_end" => $AllDataExpense['installments_end'],
                    "date_add" => $AllDataExpense['date_add'],
                ];
                $Index++;
            }

            $Index = 0;


            $DataExpense = $this->connBD()->prepare("SELECT * FROM user_one_off_expense WHERE id_user = '$paramUserID' AND situation != 'DISABLED'");
            $DataExpense->execute();

            while ($AllDataOneOffExpense = $DataExpense->fetch(PDO::FETCH_ASSOC)) {
                $ArrayOneOffExpense[$Index] = [
                    "id_amount" => $AllDataOneOffExpense['id_amount'],
                    "address" => $AllDataOneOffExpense['address'],
                    "address_number" => $AllDataOneOffExpense['address_number'],
                    "district" => $AllDataOneOffExpense['district'],
                    "city" => $AllDataOneOffExpense['city'],
                    "federal_state" => $AllDataOneOffExpense['federal_state'],
                    "establishment" => $AllDataOneOffExpense['establishment'],
                    "amount" => $AllDataOneOffExpense['amount'],
                    "expense_date" => $AllDataOneOffExpense['expense_date'],
                ];
                $Index++;
            }

            $Index = 0;

            $DataMonth = $this->connBD()->prepare("SELECT * FROM table_month ");
            $DataMonth->execute();

            while ($Month = $DataMonth->fetch(PDO::FETCH_ASSOC)) {
                $ArrayMonth[$Index] = [
                    "id_month" => $Month['id_month'],
                    "name" => $Month['name'],
                ];
                $Index++;
            }
            $dataModal = [
                "current_amount" => number_format($DataBalance['current_amount'], 2),
                "expense" => $ArrayExpense,
                "oneoffexpense" => $ArrayOneOffExpense,
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
