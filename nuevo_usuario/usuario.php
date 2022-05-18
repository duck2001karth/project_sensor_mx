<?php

    if(!file_exists("usuario.txt")){
        file_put_contents("usuario.txt", "");
    }

    if(isset($_GET["usuario"])&&isset($_GET["contrasena"])){
        $usuario=$_GET["usuario"];
        $contrasena=$_GET["contrasena"];
        $texto=$usuario."\r\n".$contrasena;
        file_put_contents("usuario.txt", $texto);
    }

    $archivo=file_get_contents("usuario.txt");
?>

<!DOCTYPE html>
<html>
	<head>
        <meta http-equiv="refresh" content="0; url=../">
    </head>

    <body>
    </body>
</html>
