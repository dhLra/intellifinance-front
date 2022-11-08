<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");

class CalendarData extends Conn
{
    public function getCalendarData()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];

        try {

            $CalendarData = $this->connBD()->prepare("SELECT * FROM user_one_off_expense WHERE id_user = '$paramUserID' AND situation = 'ACTIVE'");
            $CalendarData->execute();

            $ArrayData = [];
            $Index = 0;

            while ($Data = $CalendarData->fetch(PDO::FETCH_ASSOC)) {
                $ArrayData[$Index] = [
                    "id_amount" => $Data['id_amount'],
                    "address" => $Data['address'],
                    "address_number" => $Data['address_number'],
                    "district" => $Data['district'],
                    "city" => $Data['city'],
                    "establishment" => $Data['establishment'],
                    "amount" => number_format($Data['amount']),
                    "id_category" => $Data['id_category'],
                    "expense_date" => $Data['expense_date']
                ];
                $Index++;
            }

            echo json_encode($ArrayData);
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
