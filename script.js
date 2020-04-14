var btns = document.getElementsByClassName("btn");
var display = document.getElementById("display");

var operand1 = 0
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

// function isNum(value) {
//     return value == "0" || value == "1" || value == "2" || value == "3" || value == "4" || value == "5" || value == "6" || value == "7" || value == "8" || value == "9";
// }

for (let i=0; i< btns.length; i++){
    btns[i].addEventListener('click', function(){
        let value = this.getAttribute('data-value');
        let text = display.textContent.trim();

        if (isOperator(value)){
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = ""
        }
        else if(value == "ac"){
            display.textContent = ""
        }
        else if(value == "sign"){
            operand1 = -1* parseFloat(text);
            display.textContent = operand1;
        }
        else if(value == "."){
            if (text.length && !text.includes('.')){
                display.textContent = text + '.';
            }
        }
        else if(value == "%"){
            operand1 = parseFloat(text) / 100;
            display.textContent = operand1;
        }
        else if(value == "="){
            operand2 = parseFloat(text);
            let result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result || result == 0){
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        else{
            display.textContent += value;
        }
    });
}
