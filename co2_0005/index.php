<?php

    if(!file_exists("dato.txt")){
        file_put_contents("dato.txt", "");
    }

    if(isset($_GET["A"])){
        $dato=$_GET["A"];
        file_put_contents("dato.txt", $dato);
    }

    $archivo=file_get_contents("dato.txt");
?>

<!DOCTYPE html>
<html>
	<head></head>
    <body>
        <p><?php echo $archivo; ?></p>
    </body>
</html>