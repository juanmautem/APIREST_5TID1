<?php 
require_once 'clases/auth.class.php';
require_once 'clases/response.class.php';

$_auth = new auth;
$_respuestas = new response;



if($_SERVER['REQUEST_METHOD'] == "GET"){
    echo "Hola desde el documento";
    $postData = $_GET;
    print_r($postData);

    $dataArray = $_auth->logIn(json_encode($postData));

    print_r(json_encode($dataArray));

}else{
    echo "Método no permitido";
}


?>