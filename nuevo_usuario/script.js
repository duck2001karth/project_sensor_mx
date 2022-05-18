function crear_nuevo_usuario(){
    var usuario="";
    var contra="";
    var confir="";

    usuario=document.getElementById("text_usuario").value;
    contra=document.getElementById("text_contra").value;
    confir=document.getElementById("text_confir").value;

    //var cadena_texto=usuario+contra+confir;
    //alert(cadena_texto);

   if(usuario!="" && contra!="" &&confir!=""){
       if(contra==confir){
           if(window.confirm("Nuevo usuario creado")){
               window.location.href="usuario.php?usuario="+usuario+"&contrasena="+contra;
           }
       }
       else{
            alert("Las contrseñas no coinciden");
       }
   } 
   else{
       alert("Faltan campos por rellenar");
   }

}