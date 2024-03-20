function cuadrados(){
    var semillitas=[];
    var gen=[];
    var x=[];
    var r=[];
    var semilla=document.getElementById("semilla").value;
    var rep=document.getElementById("num").value;
    semilla= semilla.toString();
    console.log(semilla);
    
    console.log("Tamaño de semilla "+semilla.length);
    var long = semilla.length;
    
    if(long<=3){
        console.log("Ingresar un numero mayor a 3 digitos");
        alert("Ingresar un numero mayor a 3 digitos");
    }
    else{
    for(var a=1;a<=rep;a++){
    semillitas.push(semilla);
    console.log("La semilla ingresada fue: "+semilla);
    var y0=Math.pow(semilla,2);
    console.log("Y0=("+semilla+")^2="+y0);
    y0= y0.toString();
    console.log(y0);
    /*gen.push(y0);*/
    console.log(y0.length);
    var longitud = y0.length;
    var centro=longitud-long;
    console.log("centro "+centro);
    var p=centro%2;
    console.log("P "+p);
    if(p!=0){
        console.log("El numero es impar");
        y0="0"+y0;
        console.log("y0 "+y0);
        gen.push(y0);
        longitud=longitud+1;
        console.log("Long "+longitud);
        centro=centro+1
        console.log(centro)
        lado=centro/2;
        console.log("lado "+lado);
        var array=y0.split("",longitud);
        console.log(array);
        var y2="";
        var fin=longitud-lado;
        console.log(fin);
        for(var z=lado;z<fin;z++){
            console.log(z);
            y2=y2+array[z];
            console.log("x1 "+y2);
        }
        x.push(y2);
        var r1="0."+y2;
        console.log("r1="+r1);
        r.push(r1);
        console.log("cambio de semilla");
        semilla=y2;
    }
    else{
        gen.push(y0);
        lado=centro/2;
        console.log("lado "+lado);
        var array=y0.split("",longitud);
        console.log(array);
        var y2="";
        var fin=longitud-lado;
        console.log(fin);
        for(var z=lado;z<fin;z++){
            console.log(z);
            y2=y2+array[z];
            console.log("x1 "+y2);
        }
        x.push(y2);
        var r1="0."+y2;
        console.log("r1="+r1);
        r.push(r1);
        console.log("cambio de semilla");
        semilla=y2;
    }
    }
    console.log(semillitas);
    document.getElementById("contenido").innerHTML = ""
    semillitas.forEach(function(elemento,index){
        document.getElementById("contenido").innerHTML += "<tr><td>" +
        "Y"+index+"=("+elemento+")^2="+ gen[index] + "</td><td>" + "X"+index +"="+x[index]+ 
        "</td><td>" + "r"+index + "="+r[index] + "</td>"
    });
    }
}
function borrar6(){
    document.getElementById("semilla").value="";
    document.getElementById("num").value="";
    document.getElementById("contenido").innerHTML = "";
    document.getElementById("mon").value="";
    document.getElementById("buscar").innerHTML="";
}
function borrar(){
    document.getElementById("semilla").value="";
    document.getElementById("num").value="";
    document.getElementById("contenido").innerHTML = "";
}
function borrar1(){
    document.getElementById("semilla").value="";
    document.getElementById("semilla2").value="";
    document.getElementById("num").value="";
    document.getElementById("contenido").innerHTML = "";
}

function borrar2(){
    document.getElementById("semilla").value="";
    document.getElementById("cons").value="";
    document.getElementById("num").value="";
    document.getElementById("contenido").innerHTML = "";
}
function borrar3(){
    document.getElementById("semilla").value="";
    document.getElementById("mult").value="";
    document.getElementById("c").value="";
    document.getElementById("mod").value="";
    document.getElementById("num").value="";
    document.getElementById("contenido").innerHTML = "";
}
function borrar4(){
    document.getElementById("semilla").value="";
    document.getElementById("mod").value="";
    document.getElementById("num").value="";
    document.getElementById("contenido").innerHTML = "";
}
function borrar5(){
    document.getElementById("semilla").value="";
    document.getElementById("const").value="";
    document.getElementById("num").value="";
    document.getElementById("g").value="";
    document.getElementById("contenido").innerHTML = "";
}
function semilla(){
    document.getElementById("semilla").value="";
}
function semilla2(){
    document.getElementById("semilla2").value="";
}
function repetir(){
    document.getElementById("num").value="";
}
function cons(){
    document.getElementById("cons").value="";
}
function cons1(){
    document.getElementById("const").value="";
}
function mult(){
    document.getElementById("mult").value="";
}
function c(){
    document.getElementById("c").value="";
}
function mod(){
    document.getElementById("mod").value="";
}
function g(){
    document.getElementById("g").value="";
}

function productos(){
    var semi=[];
    var semi2=[];
    var gen1=[];
    var rz=[];
    var semilla1=document.getElementById("semilla").value;
    var semilla2=document.getElementById("semilla2").value;
    var rep=document.getElementById("num").value;
    semilla1= semilla1.toString();
    semilla2= semilla2.toString();
    console.log(semilla1);
    console.log(semilla2);
    
    console.log("Tamaño de semilla 1 es "+semilla1.length);
    console.log("Tamaño de semilla 2 es "+semilla2.length);
    var long1 = semilla1.length;
    var long2 = semilla2.length;
    if(long1 <=3 || long2<=3){
        alert("Ingresar un numero mayor a 3 digitos");
    }
    else{
    for(var a=1;a<=rep;a++){
    semi.push(semilla1);
    semi2.push(semilla2);
    if(long1==long2){
        console.log("Las semillas tienen el mismo numero de digitos");
        var ri= semilla1 * semilla2;
        console.log("R1 es igual "+ri);
        ri=ri.toString();
        /*gen1.push(ri);*/
        var largo = ri.length;
        var cen = largo-long1; 
        var p1=cen%2;
        if(p1!=0){
            ri="0"+ri;
            gen1.push(ri);
            largo=largo+1;
            cen=cen+1;
            lado=cen/2;
            var array=ri.split("",largo);
            console.log(array);
            var y2="";
            var fin=largo-lado;
            console.log(fin);
            for(var z=lado;z<fin;z++){
            console.log(z);
            y2=y2+array[z];
            console.log("x1 "+y2);
        }
        var r1="0."+y2;
        rz.push(r1);
        console.log("Cambio de semilla");
        semilla1=semilla2;
        semilla2=y2;
        }
        else{
            gen1.push(ri);
            lado=cen/2;
        console.log("lado "+lado);
        var array=ri.split("",largo);
        console.log(array);
        var y2="";
        var fin=largo-lado;
        console.log(fin);
        for(var z=lado;z<fin;z++){
            console.log(z);
            y2=y2+array[z];
            console.log("x1 "+y2);
        }
        
        var r1="0."+y2;
        console.log("r1="+r1);
        rz.push(r1);
        console.log("cambio de semilla");
        semilla1=semilla2;
        semilla2=y2;
        }
        
    }
    else{
        console.log("Las semillas son diferentes");
        alert("Las semillas tienen diferente longitud");
        document.getElementById("semilla").value="";
        document.getElementById("semilla2").value="";
        document.getElementById("num").value="";
        document.getElementById("contenido").innerHTML = "";
    }
}
    document.getElementById("contenido").innerHTML = ""
    semi.forEach(function(elemento,index){
        document.getElementById("contenido").innerHTML += "<tr><td>" +
        "ri="+elemento+"*"+semi2[index]+"="+gen1[index]+"</td><td>"+rz[index] 
        "</td>"
    });
    }
}


function modificado(){
    var semillitas=[];
    var gen=[];
    var x=[];
    var r=[];
    var semilla=document.getElementById("semilla").value;
    var constante=document.getElementById("cons").value;
    var rep=document.getElementById("num").value;
    semilla= semilla.toString();
    console.log(semilla);
    
    console.log("Tamaño de semilla "+semilla.length);
    var long = semilla.length;
    for(var a=1;a<=rep;a++){
    semillitas.push(semilla);
    console.log("La semilla ingresada fue: "+semilla);
    var y0=constante*semilla;
    y0=y0.toString();
    console.log("resultado x0:"+ y0);
    var longitud = y0.length;
    if(longitud==2){
        y0="00"+y0;
        longitud=y0.length;
    }else{}
    var centro=longitud-long;
    console.log("centro "+centro);
    var p=centro%2;
    console.log("P "+p);
    if(p!=0){
        console.log("El numero es impar");
        y0="0"+y0;
        console.log("y0 "+y0);
        gen.push(y0);
        longitud=longitud+1;
        console.log("Long "+longitud);
        centro=centro+1
        console.log(centro)
        lado=centro/2;
        console.log("lado "+lado);
        var array=y0.split("",longitud);
        console.log(array);
        var y2="";
        var fin=longitud-lado;
        console.log(fin);
        for(var z=lado;z<fin;z++){
            console.log(z);
            y2=y2+array[z];
            console.log("x1 "+y2);
        }
        x.push(y2);
        var r1="0."+y2;
        console.log("r1="+r1);
        r.push(r1);
        console.log("cambio de semilla");
        semilla=y2;
    }
    else{
        gen.push(y0);
        lado=centro/2;
        console.log("lado "+lado);
        var array=y0.split("",longitud);
        console.log(array);
        var y2="";
        var fin=longitud-lado;
        console.log(fin);
        for(var z=lado;z<fin;z++){
            console.log(z);
            y2=y2+array[z];
            console.log("x1 "+y2);
        }
        x.push(y2);
        var r1="0."+y2;
        console.log("r1="+r1);
        r.push(r1);
        console.log("cambio de semilla");
        semilla=y2;  
    }
}
        console.log(semillitas);
        document.getElementById("contenido").innerHTML = ""
        semillitas.forEach(function(elemento,index){
        document.getElementById("contenido").innerHTML += "<tr><td>" +
        elemento + "</td><td>" + gen[index]+ 
        "</td><td>" + r[index] + "</td>"
    });
}

function neumann(){
    var semillitas=[];
    var gen=[];
    var x=[];
    var r=[];
    var semilla=document.getElementById("semilla").value;
    var rep=document.getElementById("num").value;
    semilla= semilla.toString();
    console.log(semilla);
    
    console.log("Tamaño de semilla "+semilla.length);
    var long = semilla.length;
    
    if(long<=9 || long>10){
        console.log("Ingresar un numero de 10 digitos");
        alert("Ingresar un numero de 10 digitos");
    }
    else{
    long=long-5;
    for(var a=1;a<=rep;a++){
    semillitas.push(semilla);
    console.log("La semilla ingresada fue: "+semilla);
    var y0=Math.pow(semilla,2);
    console.log("Y0=("+semilla+")^2="+y0);
    y0= y0.toString();
    console.log(y0);
    /*gen.push(y0);*/
    console.log(y0.length);
    var longitud = y0.length;
    var centro=longitud-long;
    console.log("centro "+centro);
    var p=centro%2;
    console.log("P "+p);
    if(p!=0){
        console.log("El numero es impar");
        y0="0"+y0;
        console.log("y0 "+y0);
        gen.push(y0);
        longitud=longitud+1;
        console.log("Long "+longitud);
        centro=centro+1
        console.log(centro)
        lado=centro/2;
        console.log("lado "+lado);
        var array=y0.split("",longitud);
        console.log(array);
        var y2="";
        var fin=longitud-lado;
        console.log(fin);
        for(var z=lado;z<fin;z++){
            console.log(z);
            y2=y2+array[z];
            console.log("x1 "+y2);
        }
        x.push(y2);
        var r1="0."+y2;
        console.log("r1="+r1);
        r.push(r1);
        console.log("cambio de semilla");
        semilla=y2;
    }
    else{
        gen.push(y0);
        lado=centro/2;
        console.log("lado "+lado);
        var array=y0.split("",longitud);
        console.log(array);
        var y2="";
        var fin=longitud-lado;
        console.log(fin);
        for(var z=lado;z<fin;z++){
            console.log(z);
            y2=y2+array[z];
            console.log("x1 "+y2);
        }
        x.push(y2);
        var r1="0."+y2;
        console.log("r1="+r1);
        r.push(r1);
        console.log("cambio de semilla");
        semilla=y2;
    }
    }
    console.log(semillitas);
    document.getElementById("contenido").innerHTML = ""
    semillitas.forEach(function(elemento,index){
        document.getElementById("contenido").innerHTML += "<tr><td>" +
        "Y"+index+"=("+elemento+")^2="+ gen[index] + "</td><td>" + "X"+index +"="+x[index]+ 
        "</td><td>" + "r"+index + "="+r[index] + "</td>"
        
    });
    var posibilidades=[];
    var mon=document.getElementById("mon").value;
    if(mon==""){
        document.getElementById("buscar").innerHTML="Ingresa un numero para saber sus posibilidades";
    }else{
    var pos= r.indexOf(mon);
    if(pos==-1){
        document.getElementById("buscar").innerHTML="Ninguna Posibilidad";
    }else{
        while (pos!=-1){
            posibilidades.push(pos);
            pos=r.indexOf(mon,pos+1);
            }
            var ML=posibilidades.length;
            var decimal=ML/rep;
            document.getElementById("buscar").innerHTML="Posibilidad de "+ML+"/"+rep+" = "+decimal;    
    }
    }  
    }  
}


function congruencial(){
    var semillitas=[];
    var gen=[];
    var x=[];
    var r=[];
    var semilla=document.getElementById("semilla").value;
    var mult=document.getElementById("mult").value;
    var c=document.getElementById("c").value;
    var mod=document.getElementById("mod").value;
    var rep=document.getElementById("num").value;
    for(var a=1;a<=rep;a++){
    semillitas.push(semilla)
    console.log(semilla);
    var y0=semilla*mult;
    console.log("mult: "+y0);
    y0=Number(y0)+ Number(c);
    console.log("sum: "+y0);
    y0=y0%mod;
    console.log("gen: "+y0);
    gen.push(y0);
    var r1="0."+y0;
    console.log("y0:"+y0);
    x.push(r1);
    semilla=y0;
}
    console.log(semillitas);
    document.getElementById("contenido").innerHTML = ""
    semillitas.forEach(function(elemento,index){
    document.getElementById("contenido").innerHTML += "<tr><td>" +
    "X"+index+"=("+elemento+"*"+mult+"+"+c+") mod "+mod +"</td><td>" +x[index]+ 
    "</td>"
});
}

function aditivo(){
    var semillitas=[];
    var gen=[];
    var x=[];
    var r=[];
    var semilla=document.getElementById("semilla").value;
    var mod=document.getElementById("mod").value;
    var rep=document.getElementById("num").value;
    let array=semilla.split(',');
    console.log(array);
    var long=array.length-1;
    var z=long;
    console.log("Long"+long);
    for(var a=1;a<=rep;a++){
    
    console.log("z: "+z);
    var y0=Number(array[a-1])+Number(array[z]);
    z=z+1;
    y0=y0%mod;
    console.log("Gen "+y0);
    array.push(y0);
    gen.push(y0);
    var r1=y0/(mod-1);
    console.log("R1: "+r1);
    x.push(r1);
    }
    
    console.log(array);
    document.getElementById("contenido").innerHTML = ""
    /*array.forEach(function(elemento,index){
    document.getElementById("contenido").innerHTML += "<tr><td>" +
    "X"+((long+2)+index)+"=("+elemento+"+"+array[index+long]+") mod "+mod+"="+gen[index] +"</td><td>" +gen[index]+"/"+(mod-1)+x[index]+ 
    "</td>" 
});*/

    for(var a=0;a<rep;a++){
        document.getElementById("contenido").innerHTML += "<tr><td>" +
        "X"+((long+2)+a)+"=("+array[a]+"+"+array[a+long]+") mod "+mod+"="+gen[a] +"</td><td>" +gen[a]+"/"+(mod-1)+"="+x[a]+ 
        "</td>" 
    }
}

function multiplicativo(){
    var semillitas=[];
    var gen=[];
    var x=[];
    var r=[];
    var semilla=document.getElementById("semilla").value;
    var k=document.getElementById("const").value;
    var g=document.getElementById("g").value;
    var a=document.getElementById("radio1").checked;
    var rep=document.getElementById("num").value;
    console.log(a);
    var impar=semilla%2;
    if(impar==0){
        alert("La semilla ingresada no es impar");
        document.getElementById("semilla").value="";
    }
    else{
    if(a==true){
        var a1=(3+(8*k));
        console.log("a="+a1);
    }
    else{
        var a1=(5+(8*k));
        console.log("a="+a1);
    }
    for(var a=1;a<=rep;a++){
    semillitas.push(semilla);
    var m= Math.pow(2,g);
    console.log("m="+m);
    var y0=semilla*a1;
    y0=y0%m;
    console.log(y0);
    gen.push(y0);
    var r1= y0/(m-1);
    console.log(r1);
    x.push(r1);
    semilla=y0;
    }
    console.log(semillitas);
    document.getElementById("contenido").innerHTML = ""
    semillitas.forEach(function(elemento,index){
    document.getElementById("contenido").innerHTML += "<tr><td>" +
    "X"+index+"=("+elemento+"*"+a1+") mod "+m +"="+gen[index]+"</td><td>" +gen[index]+"/"+(m-1)+"="+x[index]+ 
    "</td>"
});
}
}
function abrir(){
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("nav-menu_visible");
}

