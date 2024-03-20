function transformada(){
    var lam= document.getElementById("lambda").value; 
    console.log(lam);
    if(lam>1){
        alert("Ingresar numero entre 0 y 1");
    }else{
    var rep= document.getElementById("rep").value;
    var poker=[];
    
    for(var i=1;i<=rep;i++){
        var F=1-Math.exp(-lam*lam);
        F=Math.floor(F*100000)/100000;
        
        console.log(F);
        var x = -Math.log(1-F)/lam;
        x=Math.floor(x*100000)/100000;
        console.log(x);
        console.log(i);
        x=String(x);
        poker.push(x);
        lam=x;
    }
    console.log(poker);
    document.getElementById("contenido").innerHTML = ""
    for(z=0;z<=rep-1;z+=3){
        document.getElementById("contenido").innerHTML += "<tr><td>" +
        poker[z] + "</td><td>" + poker[z+1] + 
        "</td><td>" + poker[z+2] + "</td>"
    }
    var pachuca=0; //Todos diferentes
    var par=0;    //un par
    var Dpares=0; //dos pares
    var tercia=0; //tres iguales
    var full=0;   //tres y un par
    var poker1=0;  //cuatro iguales
    var quintilla=0;  //cinco iguales
    var long= poker.length;
    var FO=[];
    var FE=[];
    var PE=[0.3024,0.5040,0.0720,0.0045,0.1080,0.0090,0.0001];
    for(i=0;i<=6;i++){
        var mul=PE[i]*long;
        mul=mul.toFixed(4); //Solo 4 decimales
        FE.push(mul);
    }
    console.log(FE);
    for(i=0;i<=long-1;i++){
        var tem=poker[i];
        console.log(tem);
        var por= tem.split(".",2);
        console.log(por);
        var cartas= por[1];
        cartas=cartas.split("");
        console.log(cartas);
        let duplicados = [];
        const tempArray = [...cartas].sort();
        for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
        duplicados.push(tempArray[i]);
        }
        }
        if(duplicados.length==0){
            pachuca=pachuca+1;
            console.log("Pachuca");
        }else{
            for(let z=0;z<=duplicados.length-1;z++){
                var indices=[];
                var elemento=duplicados[z];
                var idx= cartas.indexOf(elemento);
                while(idx != -1){
                    indices.push(idx);
                    idx=cartas.indexOf(elemento,idx+1);
                }
                console.log("Apariciones",indices);
            }
        }
        if(duplicados.length==1){
            par=par+1;
            console.log("Es par");
        }else{}
        if(duplicados.length==2 && duplicados[0]==duplicados[1]){
            tercia=tercia+1;
            console.log("tercia");
        }else{}
        if(duplicados.length==3 && duplicados[0]==duplicados[1] && duplicados[1]==duplicados[2]){
            poker1=poker1+1;
            console.log("Es poker");
        }else{}
        if(duplicados.length==2 && duplicados[0]!=duplicados[1]){
            Dpares=Dpares+1;
            console.log("Doble par");
        }else{}
        if(duplicados.length==3 && (duplicados[0]!=duplicados[1] || duplicados[1]!=duplicados[2])){
            full=full+1;
            console.log("Es full");
        }else{}
        if(duplicados.length==4 && duplicados[0]==duplicados[1] && duplicados[1]==duplicados[2] && duplicados[2]==duplicados[3]){
            quintilla=quintilla+1;
            console.log("Quintilla");
        }else{}
        console.log("Duplicados ",duplicados); // [2, 4]
        console.log("Pachuca",pachuca);
        console.log("Par",par);
        console.log("tercia",tercia);
        console.log("poker",poker1);
        console.log("Dos pares",Dpares);
        console.log("full",full);
        console.log("Quintilla",quintilla);
    }
        FO.push(pachuca);
        FO.push(par);
        FO.push(tercia);
        FO.push(poker1);
        FO.push(Dpares);
        FO.push(full);
        FO.push(quintilla);
        console.log(FE);
        var FE2 = FE.map(num => Number(num));
        console.log(FE2);
        var x0=((Math.pow((FE2[0]-pachuca),2))/FE2[0])+
        ((Math.pow((FE2[1]-par),2))/FE2[1])+
        ((Math.pow((FE2[2]-tercia),2))/FE2[2])+
        ((Math.pow((FE2[3]-Dpares),2))/FE2[3])+
        ((Math.pow((FE2[4]-full),2))/FE2[4])+
        ((Math.pow((FE2[5]-poker1),2))/FE2[5])+
        ((Math.pow((FE2[6]-quintilla),2))/FE2[6]);
        x0=Math.floor(x0*1000)/1000;
        console.log(x0);
        var col=["Pachuca","Par","Tercia","Poker","Dos Pares","Full","Quintilla"];
        document.getElementById("probabilidades").innerHTML = "";
        FO.forEach(function(elemento,index){
        document.getElementById("probabilidades").innerHTML += "<tr><td>" +
        col[index] + "</td><td>" + elemento+ 
        "</td><td>" + PE[index] + "</td><td>"+ FE2[index]+"</td>"
    });
        document.getElementById("x1").innerHTML = "";
        document.getElementById("x1").innerHTML = "";
        document.getElementById("x1").innerHTML += "X1^2 = "+x0;
}
}

function lambda(){
    document.getElementById("lambda").value="";
}
   

function rep(){
    document.getElementById("rep").value="";
}
function limpiar(){
    document.getElementById("x1").innerHTML = "";
    document.getElementById("lambda").value="";
    document.getElementById("rep").value="";
    document.getElementById("contenido").innerHTML = "";
    document.getElementById("probabilidades").innerHTML = "";
    document.getElementById("x1").innerHTML = "";
    
}


function poisson(){
    var lambda= document.getElementById("lambda").value;
    //var des= document.getElementById("des").value;
    var rep= document.getElementById("rep").value;
    var poker=[];
    for(var m=1;m<=rep;m++){
    let p = (Math.pow(lambda, m) * Math.exp(-lambda))/factorial(m);
    p=p.toFixed(5);
    console.log(p);
    poker.push(p);
}
    console.log(poker);
    document.getElementById("contenido").innerHTML = ""
    for(z=0;z<=rep-1;z+=3){
        document.getElementById("contenido").innerHTML += "<tr><td>" +
        poker[z] + "</td><td>" + poker[z+1] + 
        "</td><td>" + poker[z+2] + "</td>"
    }
    var pachuca=0; //Todos diferentes
    var par=0;    //un par
    var Dpares=0; //dos pares
    var tercia=0; //tres iguales
    var full=0;   //tres y un par
    var poker1=0;  //cuatro iguales
    var quintilla=0;  //cinco iguales
    var long= poker.length;
    var FO=[];
    var FE=[];
    var PE=[0.3024,0.5040,0.0720,0.0045,0.1080,0.0090,0.0001];
    for(i=0;i<=6;i++){
        var mul=PE[i]*long;
        mul=mul.toFixed(4); //Solo 4 decimales
        console.log(PE[i],"*",long,"=",mul);
        FE.push(mul);
    }
    console.log(FE);
    for(i=0;i<=long-1;i++){
        var tem=poker[i];
        console.log(tem);
        var por= tem.split(".",2);
        console.log(por);
        var cartas= por[1];
        cartas=cartas.split("");
        console.log(cartas);
        let duplicados = [];
        const tempArray = [...cartas].sort();
        for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
        duplicados.push(tempArray[i]);
        }
        }
        if(duplicados.length==0){
            pachuca=pachuca+1;
            console.log("Pachuca");
        }else{
            for(let z=0;z<=duplicados.length-1;z++){
                var indices=[];
                var elemento=duplicados[z];
                var idx= cartas.indexOf(elemento);
                while(idx != -1){
                    indices.push(idx);
                    idx=cartas.indexOf(elemento,idx+1);
                }
                console.log("Apariciones",indices);
            }
        }
        if(duplicados.length==1){
            par=par+1;
            console.log("Es par");
        }else{}
        if(duplicados.length==2 && duplicados[0]==duplicados[1]){
            tercia=tercia+1;
            console.log("tercia");
        }else{}
        if(duplicados.length==3 && duplicados[0]==duplicados[1] && duplicados[1]==duplicados[2]){
            poker1=poker1+1;
            console.log("Es poker");
        }else{}
        if(duplicados.length==2 && duplicados[0]!=duplicados[1]){
            Dpares=Dpares+1;
            console.log("Doble par");
        }else{}
        if(duplicados.length==3 && (duplicados[0]!=duplicados[1] || duplicados[1]!=duplicados[2])){
            full=full+1;
            console.log("Es full");
        }else{}
        if(duplicados.length==4 && duplicados[0]==duplicados[1] && duplicados[1]==duplicados[2] && duplicados[2]==duplicados[3]){
            quintilla=quintilla+1;
            console.log("Quintilla");
        }else{}
        console.log("Duplicados ",duplicados); // [2, 4]
        console.log("Pachuca",pachuca);
        console.log("Par",par);
        console.log("tercia",tercia);
        console.log("poker",poker1);
        console.log("Dos pares",Dpares);
        console.log("full",full);
        console.log("Quintilla",quintilla);
    }
        FO.push(pachuca);
        FO.push(par);
        FO.push(tercia);
        FO.push(poker1);
        FO.push(Dpares);
        FO.push(full);
        FO.push(quintilla);
        console.log(FE);
        var FE2 = FE.map(num => Number(num));
        console.log(FE2);
        var x0=((Math.pow((FE2[0]-FO[0]),2))/FE2[0])+
        ((Math.pow((FE2[1]-FO[1]),2))/FE2[1])+
        ((Math.pow((FE2[2]-FO[2]),2))/FE2[2])+
        ((Math.pow((FE2[3]-FO[3]),2))/FE2[3])+
        ((Math.pow((FE2[4]-FO[4]),2))/FE2[4])+
        ((Math.pow((FE2[5]-FO[5]),2))/FE2[5])+
        ((Math.pow((FE2[6]-FO[6]),2))/FE2[6]);
        console.log(x0);
        console.log(FO);
        x0=Math.floor(x0*1000)/1000;
        console.log(x0);
        var col=["Pachuca","Par","Tercia","Poker","Dos Pares","Full","Quintilla"];
        document.getElementById("probabilidades").innerHTML = "";
        FO.forEach(function(elemento,index){
        document.getElementById("probabilidades").innerHTML += "<tr><td>" +
        col[index] + "</td><td>" + elemento+ 
        "</td><td>" + PE[index] + "</td><td>"+ FE2[index]+"</td>"
    });
        document.getElementById("x1").innerHTML = "";
        document.getElementById("x1").innerHTML += "X1^2 = "+x0;
}
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n-1);
    }
  }
