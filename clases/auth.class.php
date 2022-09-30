<?php 

require_once 'conexion/conexion.php';
require_once 'response.class.php';

class auth extends conexion{
	
	public function logIn($json){
		$_response = new response;
		$data = json_decode($json,true);
		if(!isset($data['user']) || !isset($data['psw'])){
			//error con los datos de entrada/campos
			return $_response->err_400();
		}else{
			//datos recibidos correctamente
			$user = $data['user'];
			$pass = $data['psw'];
			$pass = parent::encriptar($pass);
			$userData = $this->getUserData($user);
			if($data){
				if($data['psw'] ==  $pass){
					if($data['estado'] == 1){
						//generar token.
						$userId = $data['userId'];
						$resp = $this->newToken($userId);
						if($resp){
							$result = $_response->response;
							$result["result"] = 
								array(
									"token" => $resp
								);
							return $result;
						}else{
							return $_response->err_504();
						}
					}
				}else{
					return $_response->err_401();
				}
			}
			return $_response->resp200();
		}

	}

	private function getUserData($user){
		$queryString = "SELECT * FROM allusers WHERE user = $user";
		$datos = parent::getData($queryString);
		if(isset($datos[0]['user']))
			return $datos;
		else
			return false;

	}

	private function newToken($userId){
		$val = true;
		$token = bin2hex(openssl_random_pseudo_bytes(16,$val));
		$date = date("Y-m-d H:i");
		$estado = "Activo";
		$queryString = "INSERT INTO usuarios_token(userId,txtToken,bEstado,fDate)VALUES($userId,$token,$estado,$date);";
		$validate = parent::postData($queryString);
		if($validate)
			return $token;
		else
			return 0;
	}

}



?>