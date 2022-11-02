<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");

class CategoryData extends Conn
{
    public function getCategoryData()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];


        try {

            $CalendarData = $this->connBD()->prepare("SELECT * FROM user_one_off_expense WHERE id_user = '$paramUserID'");
            $CalendarData->execute();

            $ArrayData = [];
            $ArrayPorncetData = [];
            $Index = 0;

            $Category1 = 0;
            $Category2 = 0;
            $Category3 = 0;
            $Category4 = 0;
            $Category5 = 0;

            while ($Data = $CalendarData->fetch(PDO::FETCH_ASSOC)) {
                $ArrayData[$Index] = $Data['id_category'];
                $Index++;
            }

            foreach ($ArrayData as $valor) {
                if ($valor == 1) {
                    $Category1 = $Category1 + 1;
                    $ArrayPorncetData[0] = ($Category1 / count($ArrayData)) * 100;
                } else if ($valor == 2) {
                    $Category2 = $Category2 + 1;
                    $ArrayPorncetData[1] = ($Category2 / count($ArrayData)) * 100;
                } else if ($valor == 3) {
                    $Category3 = $Category3 + 1;
                    $ArrayPorncetData[2] = ($Category3 / count($ArrayData)) * 100;
                } else if ($valor == 4) {
                    $Category4 = $Category4 + 1;
                    $ArrayPorncetData[3] = ($Category4 / count($ArrayData)) * 100;
                } else if ($valor == 5) {
                    $Category5 = $Category5 + 1;
                    $ArrayPorncetData[4] = ($Category5 / count($ArrayData)) * 100;
                }
            }



            //echo($ArrayData);
            // echo($dataObject);

            echo json_encode($ArrayPorncetData);
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
