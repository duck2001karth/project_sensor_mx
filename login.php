<?php

    $direccion="../nuevo_usuario/usuario.txt";

    if(isset($_GET["usuario"])&&isset($_GET["contrasena"])){
        $usuario=$_GET["usuario"];
        $contra=$_GET["contrasena"];

        $archivo=file_get_contents("nuevo_usuario/usuario.txt");
        $pos=strpos($archivo, "\r\n");
        $usuario_archivo=substr($archivo,0,$pos);
        $contra_archivo=substr($archivo, $pos+2);
    
        if($usuario==$usuario_archivo && $contra==$contra_archivo){
            $direccion="../tablero/";
        }

        echo $usuario;
        echo $contra;
        echo $usuario_archivo;
        echo $contra_archivo;

    }
?>

<!DOCTYPE html>
<html>
    <head>
        
    </head>

    <body>
        <?php echo $direccion ?>
        <script>window.location.href="<?php echo $direccion?>"</script>
        
    </body>
</html>