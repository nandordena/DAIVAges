<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>

<style src="http://gestion.dadiva.cat/estilos_generales.css"></style>
</head>

<body>
<?
if (
	$_POST['usuario']=="secre"&&$_POST['password']=="1357"
	||$_POST['usuario']=="admin"&&$_POST['password']=="F3rn4nd0"
	||$_POST['usuario']=="fer"&&$_POST['password']=="fnn2-s"
	)
{ 
echo 
"
<a href='http://gestion.dadiva.cat/formulario_primera_vista.php'>Formulario primera vista (FRDP)</a><br>
";

}
else
{ ?>
<form action="http://gestion.dadiva.cat/" method="post" class="basico">

	Usuario <input id="usuario" name="usuario"><br>
	Contraseña  <input id="password" type="password" name="password"><br>
    <input type="submit" name="submit" value="Login">

<form/> 
 <?
}
?>
</body>
</html>