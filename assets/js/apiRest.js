function login(){
	let usr;
	let pw;
	usr = $("#user").val();
	pw = $("#psw").val();
	$.post(
		//url
		"/APIREST_5TID1/auth.php",
		//data
		{
		user : usr,
		psw : pw
		
		},
		//response
		function(data,status){
		      if(data){
		      		window.location.href = "/APIREST_5TID1/views/users.php";
		      }
		      	
		      else{
		      	alert("Acceso denegado");
		      }
		      

		}
	);
}

function getUsers(){
	let items = {};
	let users = document.getElementById('tblUsers').innerHTML = "<h3>Aqui van los Items</h3>";
	/*$.get("/APIREST_5TID1/APIREST/users.php", 
		function(data, status){
			let datos = JSON.parse(data);
		   	for(var dato of datos){

		   		alert(dato.Name);

		   }
	});*/
}

function getUser(){
	let name = prompt("Escribe un nombre:");
	let users = document.getElementById('tblUsers').innerHTML = "<h3>Aqui van los Items</h3>";
	$.get("/APIREST_5TID1/APIREST/users.php",{name : name} ,
		function(data, status){
			alert(data);
	});
}