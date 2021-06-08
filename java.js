function obtener_objeto()
{
	if (window.XMLHttpRequest)
	{
	return new XMLHttpRequest();
	}
	else if (windows.ActiveXObject)
	{
	return new ActiveXObject("Microsoft.XMLHTTP");
	}
	else
	{
	alert("No soporta");
	}
}
var solicitud=obtener_objeto(); 
function peticion()
{

	if (solicitud.readyState==0 || solicitud.readyState==4)
	{
	solicitud.open("GET","Gallery.html",true);
	solicitud.onreadystatechange=mostrar;
	solicitud.send(null);
	}
}
function correo()
{

	if (solicitud.readyState==0 || solicitud.readyState==4)
	{
	solicitud.open("GET","correo.php",true);
	solicitud.onreadystatechange=mostrar;
	solicitud.send(null);
	}
}
function peticion1()
{

	if (solicitud.readyState==0 || solicitud.readyState==4)
	{
	solicitud.open("GET","form.html",true);
	solicitud.onreadystatechange=mostrar;
	solicitud.send(null);
	}
}
function mostrar()
{
	if (solicitud.readyState==4)
	{
	document.getElementById('contenido').innerHTML=solicitud.responseText;
	}
}




function inicio()
{

	if (solicitud.readyState==0 || solicitud.readyState==4)
	{
	solicitud.open("GET","index.html",true);
	solicitud.onreadystatechange=show;
	solicitud.send(null);
	}
}
function show()
{
	if (solicitud.readyState==4)
	{
	document.getElementById('inicio').innerHTML=solicitud.responseText;
	}
}