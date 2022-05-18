
var dato1, dato2, dato3,dato4,dato5,dato6;
var Tverde="img/Tverde.jpg";
var Tnegro="img/Tnegro.jpg";
var Trojo="img/Trojo.jpg";

var Mverde="img/Mverde.jpg";
var Mrojo="img/Mrojo.jpg";

var Hverde="img/Hverde.jpg";
var Hnegro="img/Hnegro.jpg";
var Hrojo="img/Hrojo.jpg";

var Uverde="img/Uverde.jpg";
var Unegro="img/Unegro.jpg";
var Urojo="img/Urojo.jpg";

var Cverde="img/Cverde.jpg";
var Cnegro="img/Cnegro.jpg";
var Crojo="img/Crojo.jpg";




function semaforo(){

    dato1=document.getElementById("sensor1").innerHTML;
    dato2=document.getElementById("sensor2").innerHTML;
    dato3=document.getElementById("sensor3").innerHTML;
    dato4=document.getElementById("sensor4").innerHTML;
    dato5=document.getElementById("sensor5").innerHTML;
    dato6=document.getElementById("sensor6").innerHTML;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);
    dato3=parseInt(dato3);
    dato4=parseInt(dato4);
    dato5=parseInt(dato5);
    dato6=parseInt(dato6);

    if(dato1<19){
        document.getElementById("semaforo1").setAttribute("src",Tverde);
    }
    else if (dato1<23){
        document.getElementById("semaforo1").setAttribute("src",Tnegro);
    }
    else{
        document.getElementById("semaforo1").setAttribute("src",Trojo);
    }

    if(dato2==0){
        document.getElementById("semaforo2").setAttribute("src",Mverde);
    }
    else if (dato2==1){
        document.getElementById("semaforo2").setAttribute("src",Mrojo);
    }
   

    if(dato3<30){
        document.getElementById("semaforo3").setAttribute("src",Hverde);
    }
    else if (dato3<60){
        document.getElementById("semaforo3").setAttribute("src",Hnegro);
    }
    else{
        document.getElementById("semaforo3").setAttribute("src",Hrojo);
    }

    if(dato4<3){
        document.getElementById("semaforo4").setAttribute("src",Uverde);
    }
    else if (dato4<5){
        document.getElementById("semaforo4").setAttribute("src",Unegro);
    }
    else{
        document.getElementById("semaforo4").setAttribute("src",Urojo);
    }

    if(dato5<800){
        document.getElementById("semaforo5").setAttribute("src",Cverde);
    }
    else if (dato5<1200){
        document.getElementById("semaforo5").setAttribute("src",Cnegro);
    }
    else{
        document.getElementById("semaforo5").setAttribute("src",Crojo);
    }

    if(dato6<800){
        document.getElementById("semaforo6").setAttribute("src",Cverde);
    }
    else if (dato6<1200){
        document.getElementById("semaforo6").setAttribute("src",Cnegro);
    }
    else{
        document.getElementById("semaforo6").setAttribute("src",Crojo);
    }

}