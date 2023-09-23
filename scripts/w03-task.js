/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2){
    return number1 * number2;
}

function multiplyNumbers(){
    let multNumber1 = Number(document.querySelector('#factor1').value);
    let multNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multNumber1, multNumber2);    
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
//document.querySelector('#subtractNumbers').addEventListener('click', (a,b) => document.querySelector('#product').value = multiply(multNumber1, multNumber2) );

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let divNum1 = Number(document.getElementById('dividend').value);
    let divNum2 = Number(document.getElementById('divisor').value);

    document.getElementById('quotient').value = divide(divNum1, divNum2);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);






/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
