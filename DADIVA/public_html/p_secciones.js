/**
*ID Pag: p_0009
*NAME: p_secciones.js
**/

function p_0009_secciones_final_pagina()
{
	document.getElementById("p_0004_menu_seccion1_click").addEventListener("click", function(){p_0006_click_seccion(1);});
	document.getElementById("p_0004_menu_seccion2_click").addEventListener("click", function(){p_0006_click_seccion(2);});
	document.getElementById("p_0004_menu_seccion3_click").addEventListener("click", function(){p_0006_click_seccion(3);});
	document.getElementById("p_0004_menu_seccion4_click").addEventListener("click", function(){p_0006_click_seccion(4);});
	document.getElementById("p_0008_contenedor1").style.display="none";
	document.getElementById("p_0008_contenedor2").style.display="none";
	document.getElementById("p_0008_contenedor3").style.display="none";
	document.getElementById("p_0008_contenedor4").style.display="none";
}

function p_0006_click_seccion(seccion)
{
	document.getElementById("p_0008_contenedor1").style.display="none";
	document.getElementById("p_0008_contenedor2").style.display="none";
	document.getElementById("p_0008_contenedor3").style.display="none";
	document.getElementById("p_0008_contenedor4").style.display="none";
	
	switch(seccion)
	{
		case 1:
		{
			document.getElementById("p_0008_contenedor1").style.display="";
			break;
		}
		case 2:
		{
			document.getElementById("p_0008_contenedor2").style.display="";
			break;
		}
		case 3:
		{
			document.getElementById("p_0008_contenedor3").style.display="";
			break;
		}
		case 4:
		{
			document.getElementById("p_0008_contenedor4").style.display="";
			break;
		}
		default:
		{
			document.getElementById("p_0008_contenedor1").style.display="";
			break;
		}
	}
}