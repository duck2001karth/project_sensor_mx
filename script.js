function iniciar_sesion(){
    var usuario="";
    var contra="";

    usuario=document.getElementById("text_usuario").value;
    contra=document.getElementById("text_contra").value;

    //var cadena_texto=usuario+contra+confir;
    //alert(cadena_texto);

   if(usuario!="" && contra!=""){
        window.location.href="login.php?usuario="+usuario+"&contrasena="+contra;
   } 
   else{
       alert("Faltan campos por rellenar");
   }

}