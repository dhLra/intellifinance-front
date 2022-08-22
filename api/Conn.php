<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

abstract class Conn
{

    protected function connBD()
    {

        $hostname = "localhost";
        $dbname = "intellifinance";
        $dblogin = "root";
        $dbpass = "";

        try {
            $conn = new PDO('mysql:host=' . $hostname . '; dbname=' . $dbname, $dblogin, $dbpass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            return $e->getMessage();
        }
    }
}
