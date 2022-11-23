<?php
include_once("Conn.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");

class EditUserConfig extends Conn
{
    public function EditUserConfig()
    {

        $dataObject = array();
        $dataObject = json_decode(file_get_contents('php://input'), true);

        $paramUserID = $dataObject['data']['id_user'];
        $paramNewName = $dataObject['data']['new_name'];

        try {
            $DataAmount = $this->connBD()->prepare("UPDATE user_table SET  name='$paramNewName' WHERE id_user = '$paramUserID'");
            $DataAmount->execute();

            echo json_encode('Sucsses');
            die();
        } catch (Exception $e) {
            echo json_encode($e);
            die();
        }
    }
}
