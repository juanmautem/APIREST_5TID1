<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Listado de Usuarios</title>

	<!-- CSS only -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<!-- JavaScript Bundle with Popper -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</head>
<style type="text/css">
	#params{
		width: 50%;
		margin-left: 25%;
		padding-top: 5%;
	}
	#buttons{
		padding-top: 10px;
		text-align: right;
		margin-right: 5%;
	}
</style>
<body>
	<strong><center><h1>Bienvenido <i>(poner nombre de usuario)</i><hr></h1></center></strong>
	<div id="buttons">
		<button type="button" class="btn btn-dark" onclick="msg();">+ Agregar Usuario +</button>
	</div>
	<div id="tblUsuarios">
		<h3>Generar la tabla de usuarios y que muestre la información de todos los usuarios, utilizando APIREST para extraer la información de los usuarios</h3>
	</div>
</body>
<script type="text/javascript">
	function msg(){
		alert('Abrir modal o generar otra interfaz para crear un nuevo usuario, por medio de una APIREST')
	}
</script>
</html>