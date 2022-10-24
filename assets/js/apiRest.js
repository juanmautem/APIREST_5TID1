function login(){
	let usr;
	let pw;
	usr = $("#user").val();
	pw = $("#psw").val();
	/*$.post(
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
	);*/
	let dataString = new Array();
	dataString.user = usr;
	dataString.psw = pw;
	$.ajax
		({
			type: "POST",
			url: "/APIREST_5TID1/auth.php",
			data: dataString,
			success: function () {
				alert("ACCESO CORRECTO!!");
			}
		});


}

function getUsers() {
	let items = "";
	let users = document.getElementById('tblUsers');
	/*$.get("/APIREST_5TID1/APIREST/users.php", 
		function (data, status) {
			let datos = JSON.parse(data);
		   	for(var dato of datos){ // i= 0; i<datos.length ; i++;   //datos[i].nombre;
		   		//items = items + algo
		   		items += "<tr>";
	   			items += "<td style = 'text-align : center;'>" + dato.userId + "</td>";
	   			items += "<td>" + dato.Name + " " + dato.Lastname + "</td>";
	   			items += "<td>" + dato.RFC + "</td>";
	   			items += "<td>" + dato.user + "</td>";
	   			items += "<td>";
	   			if(dato.userActive == 1){
	   				items += '<button type="button" class="btn btn-success" onclick="changeStatus(' + dato.userId + ')">Activo</button>';
	   			}else{
	   				items += '<button type="button" class="btn btn-warning" onclick="changeStatus(' + dato.userId + ')">Inactivo</button>';

	   			}

	   			items += "</td>";
		   		items += "</tr>";
		   		users.innerHTML = items;
		   }
	});*/
	$.ajax({
		url: "/APIREST_5TID1/APIREST/users.php",
		type: 'GET',
		dataType: 'json', // added data type
		success: function (res) {
			console.log(res);
			alert(res);
		}
	});
}

function changeStatus(idUser){
	alert(idUser);
	let idUsr = document.getElementById('tblUsers');
	/*$.get("/APIREST_5TID1/APIREST/users.php",{name : name} ,
		function(data, status){
			alert(data);
	});*/
}

function getUser(){
	let name = prompt("Escribe un nombre:");
	let users = document.getElementById('tblUsers');
	$.get("/APIREST_5TID1/APIREST/users.php",{name : name} ,
		function(data, status){
			let datos = JSON.parse(data);
			alert(datos);
	   		items += "<tr>";
   			items += "<td style = 'text-align : center;'>" + dato.userId + "</td>";
   			items += "<td>" + dato.Name + " " + dato.Lastname + "</td>";
   			items += "<td>" + dato.RFC + "</td>";
   			items += "<td>" + dato.user + "</td>";
   			items += "<td>";
   			if(dato.userActive == 1){
   				items += '<button type="button" class="btn btn-success" onclick="changeStatus(' + dato.userId + ')">Activo</button>';
   			}else{
   				items += '<button type="button" class="btn btn-warning" onclick="changeStatus(' + dato.userId + ')">Inactivo</button>';

   			}

   			items += "</td>";
	   		items += "</tr>";
	   		users.innerHTML = items;
	});
}