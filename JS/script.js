var displayDiv = document.querySelector("#display");
let value1 = "";
let value2 = "";
let operator ="";
let calculo = "";

function press(params) {
    if (operator==="") {
        if (value1===0) {
            value1 = `${value1}`+`${params}`   
        }else{
            value1 = `${value1}`+`${params}`     
        }
        displayDiv.innerText =`${value1}`;
    }else{
        if (value2===0) {
            value2 = params
        }else{
            value2 = `${value2}`+`${params}`     
        }
        displayDiv.innerText =`${value2}`;
    }
}

function setOP(params) {
    operator = params
}

function calculate() {
    if (operator==="+") {
        calculo= parseFloat(value1)+parseFloat(value2)
    }else if(operator==="-") {
        calculo= parseFloat(value1)-parseFloat(value2)
    }else if(operator==="*") {
        calculo= parseFloat(value1)*parseFloat(value2)
    }else if(operator==="/") {
        calculo= parseFloat(value1)/parseFloat(value2)
    }
    console.log(calculo);
    displayDiv.innerText =`${calculo}`;
    value1 = calculo
    value2 = 0
}
function clr(){
    value1 = "";
    value2 = "";
    operator ="";
    calculo = 0;
    displayDiv.innerText =`${calculo}`;
}