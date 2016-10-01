<?
	/*
	$_POST['nombre1'];
	$_POST['nombre2'];
	$_POST['apellido1'];
	$_POST['apellido2'];
	$_POST['dni'];
	$_POST['telefono'];
	$_POST['calle'];
	$_POST['submit'];
	*/
	
	if(isset($_POST['submit'])){
		include $_SERVER['DOCUMENT_ROOT']."/public_html/gestion/gestion_conect_msqli.php";
		
		mysqli_query($coneccion_gestion,"
			INSERT INTO personas 
				(`Nombre`, `Nombre2`, `Apellido`, `Apellido2`, `tipo`, `puntoEncuentro`)
			VALUES 
				('".$_POST['nombre1']."', '".$_POST['nombre2']."', '".$_POST['apellido1']."', '".$_POST['apellido2']."', '', '');
		");
		
		$id=mysql_insert_id($coneccion_gestion);
		
		mysqli_query($coneccion_gestion,"
			INSERT INTO personasinformacion 
				(`persona`, `dni`, `movil`, `telefono`, `direccion`, `viveCon`)
			VALUES
				('".$id."', '".$_POST['dni']."', '', '".$_POST['telefono']."', '".$_POST['calle']."', '');
		");
		
		mysqli_close($coneccion_gestion);
	}
?>