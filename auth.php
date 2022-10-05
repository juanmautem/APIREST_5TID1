<?php 
require_once 'clases/auth.class.php';
require_once 'clases/response.class.php';

$_auth = new auth;
$_respuestas = new response;



if($_SERVER['REQUEST_METHOD'] == "POST"){
    $postData = $_POST;

    $dataArray = $_auth->logIn(json_encode($postData));

    $status = json_encode($dataArray);
    if($dataArray['status']== "ok"){
        echo "<script>confirm('$status');</script>";
        header("Location:/APIREST_5TID1/views/users.php"); // 5TID1/APIREST -> APIREST_5TID1
    }else{
        echo "<script>alert('$dataArray');</script>";
        header("Location:/APIREST_5TID1/index.php"); // 5TID1/APIREST -> APIREST_5TID1

    }
}else{
    echo "Método no permitido";

}


?>