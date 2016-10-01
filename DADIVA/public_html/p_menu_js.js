/*
/ID Pag: p_0006
NAME: p_menu_js.js
*/

estado=0;
function p_0006_menu_final_pagina()
{
	document.getElementById("p_0004_menu_seccion1_click").addEventListener("click", function(){p_0006_click_menu(1);});
	document.getElementById("p_0004_menu_seccion2_click").addEventListener("click", function(){p_0006_click_menu(2);});
	document.getElementById("p_0004_menu_seccion3_click").addEventListener("click", function(){p_0006_click_menu(3);});
	document.getElementById("p_0004_menu_seccion4_click").addEventListener("click", function(){p_0006_click_menu(4);});
	
	document.getElementById("p_0004_menu_seccion1_click").addEventListener("mouseover", function()
		{
			document.getElementById("p_0004_menu_img1_sel").style.display="inline";
			document.getElementById("p_0004_menu_texto1").style.color="#15bcac";
		});
	document.getElementById("p_0004_menu_seccion2_click").addEventListener("mouseover", function()
		{
			document.getElementById("p_0004_menu_img2_sel").style.display="inline";
			document.getElementById("p_0004_menu_texto2").style.color="#15bcac";
		});
	document.getElementById("p_0004_menu_seccion3_click").addEventListener("mouseover", function()
		{
			document.getElementById("p_0004_menu_img3_sel").style.display="inline";
			document.getElementById("p_0004_menu_texto3").style.color="#15bcac";
		});
	document.getElementById("p_0004_menu_seccion4_click").addEventListener("mouseover", function()
		{
			document.getElementById("p_0004_menu_img4_sel").style.display="inline";
			document.getElementById("p_0004_menu_texto4").style.color="#15bcac";
		});
	
	document.getElementById("p_0004_menu_seccion1_click").addEventListener("mouseout", function()
		{
			document.getElementById("p_0004_menu_img1_sel").style.display="none";
			document.getElementById("p_0004_menu_texto1").style.color="#ccc";
		});
	document.getElementById("p_0004_menu_seccion2_click").addEventListener("mouseout", function()
		{
			document.getElementById("p_0004_menu_img2_sel").style.display="none";
			document.getElementById("p_0004_menu_texto2").style.color="#ccc";
		});
	document.getElementById("p_0004_menu_seccion3_click").addEventListener("mouseout", function()
	{
		document.getElementById("p_0004_menu_img3_sel").style.display="none";
			document.getElementById("p_0004_menu_texto3").style.color="#ccc";
	});
	document.getElementById("p_0004_menu_seccion4_click").addEventListener("mouseout", function()
	{
		document.getElementById("p_0004_menu_img4_sel").style.display="none";
			document.getElementById("p_0004_menu_texto4").style.color="#ccc";
	});

}

function p_0006_click_menu(seccion)
{
	if(typeof seccion =="undefined")seccion=1;
	
	if(estado)
	{
		setTimeout(
			function()
			{
				document.getElementById("p_0004_menu_seccion1_click").setAttribute("onmouseover","p_0006_click_menu();");
				document.getElementById("p_0004_menu_seccion2_click").setAttribute("onmouseover","p_0006_click_menu();");
				document.getElementById("p_0004_menu_seccion3_click").setAttribute("onmouseover","p_0006_click_menu();");
				document.getElementById("p_0004_menu_seccion4_click").setAttribute("onmouseover","p_0006_click_menu();");
			}
		,500);
		
		estado=0;
		
		document.getElementById("p_0004_menu_seccion1").style.bottom="-50%";
		document.getElementById("p_0004_menu_seccion1").style.right="-50%";
		
		document.getElementById("p_0004_menu_seccion2").style.bottom="-50%";
		document.getElementById("p_0004_menu_seccion2").style.left="-50%";
		
		document.getElementById("p_0004_menu_seccion3").style.top="-50%";
		document.getElementById("p_0004_menu_seccion3").style.right="-50%";
		
		document.getElementById("p_0004_menu_seccion4").style.top="-50%";
		document.getElementById("p_0004_menu_seccion4").style.left="-50%";
	}
	else
	{	
		document.getElementById("p_0004_menu_seccion1_click").setAttribute("onmouseover","");
		document.getElementById("p_0004_menu_seccion2_click").setAttribute("onmouseover","");
		document.getElementById("p_0004_menu_seccion3_click").setAttribute("onmouseover","");
		document.getElementById("p_0004_menu_seccion4_click").setAttribute("onmouseover","");
			
		estado=1;
		
		document.getElementById("p_0004_menu_seccion1").style.bottom="0";
		document.getElementById("p_0004_menu_seccion1").style.right="0";
		
		document.getElementById("p_0004_menu_seccion2").style.bottom="0";
		document.getElementById("p_0004_menu_seccion2").style.left="0";
		
		document.getElementById("p_0004_menu_seccion3").style.top="0";
		document.getElementById("p_0004_menu_seccion3").style.right="0";
		
		document.getElementById("p_0004_menu_seccion4").style.top="0";
		document.getElementById("p_0004_menu_seccion4").style.left="0";
	}
	
	if(!estado)
	{
		switch(seccion)
		{
			case 1:
			{
				document.getElementById("p_0004_menu_seccion1").style.bottom="-40%";
				document.getElementById("p_0004_menu_seccion1").style.right="-40%";
				break;
			}
			case 2:
			{
				document.getElementById("p_0004_menu_seccion2").style.bottom="-40%";
				document.getElementById("p_0004_menu_seccion2").style.left="-40%";
				break;
			}
			case 3:
			{
				document.getElementById("p_0004_menu_seccion3").style.top="-40%";
				document.getElementById("p_0004_menu_seccion3").style.right="-40%";
				break;
			}
			case 4:
			{
				document.getElementById("p_0004_menu_seccion4").style.top="-40%";
				document.getElementById("p_0004_menu_seccion4").style.left="-40%";
				break;
			}
			default:
			{
				break;
			}
		}
	}
}

