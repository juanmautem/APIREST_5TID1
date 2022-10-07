<?php 

require_once '../clases/users.class.php';
require_once '../clases/response.class.php';

$_user = new users;
$_respuestas = new response;

if($_SERVER['REQUEST_METHOD'] == "POST"){
    print_r($_POST);
}elseif($_SERVER['REQUEST_METHOD'] == "GET"){
    print_r($_GET);
}else{
    echo "Método no permitido";

}
?>