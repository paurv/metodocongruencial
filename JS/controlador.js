function cargarDatos(){
    document.getElementById('t01').innerHTML=`<table id="t01" style="width: 520px;" >
                                                <tr><th></th><th></th><th>C1</th><th>C2</th><th>C3</th>
                                                </tr><tr><th id="tf-1" value="0">No.</th><th>X<sub>n</sub></th> 
                                                <th>a * X<sub>n</sub></th><th>C1 + c</th><th>C2 mod m</th></tr></table>`;
    var x1 = document.getElementById("id-semilla").value;
    var x2 = document.getElementById("id-a").value;
    var x3 = document.getElementById("id-m").value;;
    var x4 = document.getElementById("id-c").value;
    var rest = document.getElementById("id-gen").value;
    var semilla =parseInt(x1);
    var a = parseInt(x2);
    var m = parseInt(x3);
    var c = parseInt(x4);
    var stop = parseInt(rest);

    console.log(`a: ${a} m: ${m} c: ${c}`);
    if(x1 =="" || x2 =="" || x3=="" || x4==""){
        alert("Por favor llene todos los campos");
        return;
    }
    carga(semilla, a, c, m, 1, stop);
}

function carga(seed, varA, varC, varM, numeral, stop){
    if(numeral==(stop+1)){
        return;
    }

    var c1 = seed * varA;
    var c2 = c1 + varC;
    var c3 = mod(c2,varM);
    var fila = `
    <tr>
        <td>${numeral++}</td>
        <td>${seed}</td>
        <td>${c1}</td>
        <td>${c2}</td>
        <td>${c3}</td>
    </tr>`;
    document.getElementById('t01').innerHTML+=fila;

    carga(c3,varA,varC, varM, numeral, stop);
}

function mod(vC2, vM){
    if(vM > vC2)
        return vC2;
    do{
        vC2 = vC2 - vM;
    }while(vC2 > vM );

    return vC2;
}