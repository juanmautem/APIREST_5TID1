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