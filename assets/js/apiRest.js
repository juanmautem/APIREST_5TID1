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
			success: function (data) {
				if(data){
						window.location.href = "/APIREST_5TID1/views/users.php";
				}
					
				else{
					alert("Acceso denegado");
				}
			}
		});


}

function getUsers() {
//	let items = "";
//	let users = document.getElementById('tblUsers');
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
	});
	$.ajax({
		url: "/APIREST_5TID1/APIREST/users.php",
		type: 'GET',
		dataType: 'json', // added data type
		success: 
			function (res) {
				vaciarTabla(res);
			   	}	
			}
		});
		fetch("/APIREST_5TID1/APIREST/users.php")
		.then(response => response.json())
		.then(json => vaciarTabla(json))*/

		
		/*fetch("/APIREST_5TID1/APIREST/users.php", {
	            method: 'GET',
	            headers: {
	                "Content-type": "application/json"
	            }
		    })
	        .then(response => response.json())
	        .then(json => vaciarTabla(json))
	        //.then(json => console.log(json))*/

	        /*// Creamos un nuevo XMLHttpRequest
	        var xhttp = new XMLHttpRequest();

	        // Esta es la función que se ejecutará al finalizar la llamada
	        xhttp.onreadystatechange = function() {
	          // Si nada da error
	          if (this.readyState == 4 && this.status == 200) {
	            // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
	            let json = JSON.parse(this.responseText);
	            console.log(json);
	            vaciarTabla(json)
	          }
	        };

	        // Endpoint de la API y método que se va a usar para llamar
	        xhttp.open("GET", "/APIREST_5TID1/APIREST/users.php", true);
	        xhttp.setRequestHeader("Content-type", "application/json");
	        // Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
	        xhttp.send(null);*/
		
}
function vaciarTabla(datos){
	let items = "";
	let users = document.getElementById('tblUsers');
   	for(var dato of datos){ // i= 0; i<datos.length ; i++;   //datos[i].nombre;
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

//https://dev.to/vikingcodeblog/4-maneras-de-llamar-a-una-api-rest-con-javascript-2nhm