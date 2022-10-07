<?php 

require_once 'conexion/conexion.php';
require_once 'response.class.php';

class users extends conexion{

	private $nombre = "";
	private $apellidos = "";
	private $rfc = "";
	private $nickName = "";
	private $tipoUsuario = "";

	public function listaUsuarios(){ //listaUsuarios(2) $pagina = 1
		/*$inicio = 0;
		$cantidadItems = 5;
		if($pagina > 1 ){ // val = 2
			$inicio = ($cantidadItems * ($pagina -1));  //(5*(2-1))= 5
 			$cantidadItems = $cantidadItems * $pagina; //5*2 = 10 
		}*/
		$query = "SELECT * FROM userdata"; // limit $inicio,$cantidad;
		$datos = parent::getData($query);
		return ($datos);

	}
	public function buscarUsuarioNombre($userName){ 
		$query = "SELECT * FROM userdata where Name =  '$userName'"; 
		$datos = parent::getData($query);
		return ($datos);

	}

}

?>