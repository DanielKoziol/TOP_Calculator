/* getElementsBy/QuerySelectorAll - klasa buttonow + 
onclick.button - 
uruchomienie funkcji przypisanej do paska z cyfarmi - klasa numerka (
    do kazdego buttonu przypisana klasa z cyfra)

do kazdego operatora (spacje miedzy nim ' + ')(o ile mozliwe dodanie znakow 
    takich w nazwie. jak nie specjalne pole, na ten znak) 

po przecinku: toFixed(2)



    */

const docCalcLine = document.querySelector(".calcLine");
const resultOperator = document.querySelector(".result");
let firstDigit = 0;
let interimCalc = 0;
let lastOperator;
let scriptCalcLine;
let resultSwitch;
console.log(lastOperator);

const keys = Array.from(document.querySelectorAll('.digit'));
  keys.forEach(key => key.addEventListener('click', addDigit));

const operators = Array.from(document.querySelectorAll('.mathFunc'));
  operators.forEach(operator => operator.addEventListener('click', addOperator)); 

resultOperator.addEventListener('click', showResult);

function addDigit () { // e usunalem z (e) PRZY WYWOLYWANIU FUNKCJI SPRAWDZ WARTOSCI LASTOPERATOR!!
    console.log("currentLastOperator:" + lastOperator);
    if (!firstDigit){
    firstDigit = this.textContent;
    console.log("FirstaddDigitfunction=" + firstDigit);
    docCalcLine.textContent += `${this.textContent}`
    console.log(docCalcLine.textContent);
    }
        else if (!lastOperator){
        firstDigit += this.textContent;
        console.log("ElseAddDigitfunction=");
        console.log(firstDigit);
        docCalcLine.textContent += `${this.textContent}`
        console.log(docCalcLine.textContent);
        }

            else if (!interimCalc) { 
            interimCalc = this.textContent;
            console.log("interimCalc1=");
            console.log(interimCalc);
            docCalcLine.textContent += `${this.textContent}`
            console.log(docCalcLine.textContent);
            }
            else {
            interimCalc += this.textContent;
            console.log("EinterimCalcElse=");
            console.log(interimCalc);
            docCalcLine.textContent += `${this.textContent}`
            console.log(docCalcLine.textContent);
            }
    }
;

function addOperator () {
    console.log("Operator+FirstDigit" + firstDigit);
    console.log(this.textContent);
    console.log(lastOperator);
    if (!firstDigit) {return}
    else if (!interimCalc) {lastOperator = this.textContent;
        docCalcLine.textContent = firstDigit + ` ${this.textContent} `}
    else if (lastOperator) {switchOperator(lastOperator, firstDigit, interimCalc); //warunek ze 2liczba nie0
    firstDigit = resultSwitch;
    interimCalc = 0;
    lastOperator = this.textContent
    docCalcLine.textContent = firstDigit + ` ${this.textContent} `;}
   // else {
   // console.log("elseLastOperator");
   // lastOperator = this.textContent;}
   // console.log("lastOperator " + lastOperator);
   // docCalcLine.textContent += ` ${this.textContent} `
    // awaitNumber()? CHYBA NIE ;// stworz funkcje na koniec operatora. Funkcja czeka na to co bedzie klikniete nastepne i robi co trzeba;
    //} else console.log("miejsce na inne operatory")

    
}


function showResult (e) {
    if (this.className == "result") {
        console.log("outsidefunc " + firstDigit);  
        // funkcja bedzie brala pierwsze dwa fragmenty z array calcLine i zamieniala na wartosc w let[i?] wyniku      
    }
}


function switchOperator (Op, ...args) {
    Op = lastOperator;
    switch (Op) {
case '+':
    console.log("+Switching!");
    resultSwitch = adding (...args);
    console.log(resultSwitch);
    break;
case '-':
    console.log("-Switching!");
    resultSwitch = subtracting (...args);
    console.log(resultSwitch);
    break;
case '*':
    console.log("*Switching!");
    resultSwitch = multiplying (...args);
    console.log(resultSwitch);
    break;
case '/':
    console.log("/Switching!");
    resultSwitch = dzielenie (...args);
    console.log(resultSwitch);
    break;
}
}

function adding(...args) { //???
	return args.reduce(function (first, second) {
      return +first + +second;
  })};

function subtracting(...args) { //???
	return args.reduce(function (first, second) {
      return +first - +second;
  })};

function multiplying (...args) {
	return args.reduce(function (first, second) {
      return +first * +second;
  })};

function dzielenie (...args) {
	return args.reduce(function (first, second) {
      return +first / +second;
  })};