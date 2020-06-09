let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let dividir = document.getElementById("dividir");
let por = document.getElementById("por");
let menos = document.getElementById("menos");
let igual = document.getElementById("igual");
let cero = document.getElementById("cero");
let punto = document.getElementById("punto");
let mas = document.getElementById("mas");
let operacion = document.getElementById("operacion");

let termino1 = "";
let termino2 = "";
let termino3 = "";
let calculo = "";

function bUno() {
    operacion.innerHTML = operacion.innerHTML + "1";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}1`;
    } else {
        termino1 = `${termino1}1`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bDos() {
    operacion.innerHTML = operacion.innerHTML + "2";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}2`;
    } else {
        termino1 = `${termino1}2`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bTres() {
    operacion.innerHTML = operacion.innerHTML + "3";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}3`;
    } else {
        termino1 = `${termino1}3`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bCuatro() {
    operacion.innerHTML = operacion.innerHTML + "4";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}4`;
    } else {
        termino1 = `${termino1}4`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bCinco() {
    operacion.innerHTML = operacion.innerHTML + "5";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}5`;
    } else {
        termino1 = `${termino1}5`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bSeis() {
    operacion.innerHTML = operacion.innerHTML + "6";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}6`;
    } else {
        termino1 = `${termino1}6`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bSiete() {
    operacion.innerHTML = operacion.innerHTML + "7";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}7`;
    } else {
        termino1 = `${termino1}7`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bOcho() {
    operacion.innerHTML = operacion.innerHTML + "8";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}8`;
    } else {
        termino1 = `${termino1}8`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bNueve() {
    operacion.innerHTML = operacion.innerHTML + "9";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}9`;
    } else {
        termino1 = `${termino1}9`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bDividir() {
    if (operacion.innerHTML != "" || termino1 != "-") {
        operacion.innerHTML = operacion.innerHTML + " / ";
        termino1 = `${termino1}/`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bPor() {
    if (operacion.innerHTML != "" || termino1 != "-") {
        operacion.innerHTML = operacion.innerHTML + " x ";
        termino1 = `${termino1}x`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bMenos() {
    if (termino1 == ""){
        termino1 = `-${termino1}`;
        operacion.innerHTML = "-";

    }else{
        operacion.innerHTML = operacion.innerHTML + " - ";
    }
    console.log(termino1);
    console.log(termino2);
};

function bCero() {
    operacion.innerHTML = operacion.innerHTML + "0";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}0`;
    } else {
        termino1 = `${termino1}0`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bPunto() {
    if (operacion.innerHTML != "") {
        operacion.innerHTML = operacion.innerHTML + ".";
    if (operacion.innerHTML.includes("+") == true || operacion.innerHTML.includes(" - ") == true || operacion.innerHTML.includes("/") == true || operacion.innerHTML.includes("x") == true) {
        termino2 = `${termino2}.`;
    } else {
        termino1 = `${termino1}.`;
    }
    }
    console.log(termino1);
    console.log(termino2);
};

function bMas() {
    if (operacion.innerHTML != "" || termino1 != "-") {
        operacion.innerHTML = operacion.innerHTML + " + ";
        termino1 = `${termino1}+`;
    }
    console.log(termino1);
    console.log(termino2);
};

function bIgual() {
    switch (true) {
        case operacion.innerHTML.includes("x"):
            calculo = parseFloat(termino1) * parseFloat(termino2);
            operacion.innerHTML = calculo;
            termino1 = operacion.innerHTML.toString();
            termino2 = "";
            break;
        case operacion.innerHTML.includes("/"):
            calculo = parseFloat(termino1) / parseFloat(termino2);
            operacion.innerHTML = calculo.toFixed(6);
            termino1 = operacion.innerHTML.toString();
            termino2 = "";
            break;
        case operacion.innerHTML.includes("+"):
            calculo = parseFloat(termino1) + parseFloat(termino2);
            operacion.innerHTML = calculo;
            termino1 = operacion.innerHTML.toString();
            termino2 = "";
            break;
        case operacion.innerHTML.includes("-"):
            console.log(parseFloat(termino1));
            console.log(parseFloat(termino2));
            calculo = (parseFloat(termino1)) - (parseFloat(termino2));
            console.log(calculo);
            operacion.innerHTML = calculo;
            termino1 = operacion.innerHTML.toString();
            termino2 = "";
            break;
        default:
            operacion.innerHTML = operacion.innerHTML;
    }
};

function bBorrar() {
    operacion.innerHTML = "";
    termino1 = "";
    termino2 = "";
    calculo = "";
};