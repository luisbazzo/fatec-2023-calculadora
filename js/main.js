function somar(){
            
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 + num2;

    document.getElementById("resp").value = resp;

}

function subtrair(){
    
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 - num2;

    document.getElementById("resp").value = resp;

}

function multiplicar(){
    
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 * num2;

    document.getElementById("resp").value = resp;

}

function dividir(){
    
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 / num2;

    document.getElementById("resp").value = resp;

}

function restodiv(){

    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 % num2;

    document.getElementById("resp").value = resp;

}

function mostrarOperacao(){

    document.getElementById("listaOp").style.display = "block";
    document.getElementById("btnNada").style.borderRadius = "0";
    document.getElementById("btnNada").style.borderBottom = "2px solid black";
    document.getElementById("btnNada").style.display = "inline-block";
    document.getElementById("btnSomar").style.display = "none";
    document.getElementById("btnSubtrair").style.display = "none";
    document.getElementById("btnMultiplicar").style.display = "none";
    document.getElementById("btnDividir").style.display = "none";
    document.getElementById("btnRestoDiv").style.display = "none";

}

function selecionarOperacao(op){

    document.getElementById("btnNada").style.display = "none";

    if(op == "Somar"){
        document.getElementById("btnSomar").style.display = "inline-block";
    }
    else if(op == "Subtrair"){
        document.getElementById("btnSubtrair").style.display = "inline-block";
    }
    else if(op == "Multiplicar"){
        document.getElementById("btnMultiplicar").style.display = "inline-block";
    }
    else if(op == "Divisao"){
        document.getElementById("btnDividir").style.display = "inline-block";
    }
    else{
        document.getElementById("btnRestoDiv").style.display = "inline-block";
    }

    document.getElementById("listaOp").style.display = "none";
    
}

function limpar(){

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resp").value = "";
    document.getElementById("listaOp").style.display = "none";
    document.getElementById("btnNada").style.display = "inline-block";
    document.getElementById("btnSomar").style.display = "none";
    document.getElementById("btnSubtrair").style.display = "none";
    document.getElementById("btnMultiplicar").style.display = "none";
    document.getElementById("btnDividir").style.display = "none";
    document.getElementById("btnRestoDiv").style.display = "none";
    document.getElementById("btnNada").style.borderRadius = "40px";
}