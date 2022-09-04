// create the screen and keyboard for the calculator
const screen = document.createElement('div');
const keyboard = document.createElement('div');
screen.className = 'screen';
keyboard.className = 'keyboard';
screen.id = 'screen';
keyboard.id = 'keyboard';

// create rows that will be placed inside the keyboard
const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');
const row5 = document.createElement('div');

row1.id = 'row1';
row2.id = 'row2';
row3.id = 'row3';
row4.id = 'row4';
row5.id = 'row5';

// create buttons that will be placed inside the rows

const buttonAC = document.createElement('button');
const buttonSign = document.createElement('button');
const buttonPercentage = document.createElement('button');
const buttonDivide = document.createElement('button');
const button7 = document.createElement('button');
const button8 = document.createElement('button');
const button9 = document.createElement('button');
const buttonMultiply = document.createElement('button');
const button4 = document.createElement('button');
const button5 = document.createElement('button');
const button6 = document.createElement('button');
const buttonSubstract = document.createElement('button');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const buttonSum = document.createElement('button');
const button0 = document.createElement('button');
const buttonComma = document.createElement('button');
const buttonequal = document.createElement('button');

buttonAC.className = 'buttonGray'
buttonSign.className = 'buttonGray';
buttonPercentage.className = 'buttonGray';
buttonDivide.className = 'buttonOrange';
button7.className = 'buttonDark';
button8.className = 'buttonDark';
button9.className = 'buttonDark';
buttonMultiply.className = 'buttonOrange';
button4.className = 'buttonDark';
button5.className = 'buttonDark';
button6.className = 'buttonDark';
buttonSubstract.className = 'buttonOrange';
button1.className = 'buttonDark';
button2.className = 'buttonDark';
button3.className = 'buttonDark';
buttonSum.className = 'buttonOrange';
button0.className = 'button0';
buttonComma.className = 'buttonDark';
buttonequal.className = 'buttonOrange';
row1.className = 'row1'
row2.className = 'row2'
row3.className = 'row3'
row4.className = 'row4'
row5.className = 'row5'


// add content to the buttons
buttonAC.textContent = 'AC'
buttonSign.textContent = '+/-';
buttonPercentage.textContent = '%';
buttonDivide.textContent = '/';
button7.textContent = '7';
button8.textContent = '8';
button9.textContent = '9';
buttonMultiply.textContent = 'x';
button4.textContent = '4';
button5.textContent = '5';
button6.textContent = '6';
buttonSubstract.textContent = '-';
button1.textContent = '1';
button2.textContent= '2';
button3.textContent = '3';
buttonSum.textContent = '+';
button0.textContent = '0';
buttonComma.textContent = ',';
buttonequal.textContent = '=';

//place screen and keyboard inside the container
document.getElementById('container').appendChild(screen);
document.getElementById('container').appendChild(keyboard);

// place rows inside the keyboard
document.getElementById('keyboard').appendChild(row1);
document.getElementById('keyboard').appendChild(row2);
document.getElementById('keyboard').appendChild(row3);
document.getElementById('keyboard').appendChild(row4);
document.getElementById('keyboard').appendChild(row5);


// place buttons inside the rows
//row 1
document.getElementById('row1').appendChild(buttonAC);
document.getElementById('row1').appendChild(buttonSign);
document.getElementById('row1').appendChild(buttonPercentage);
document.getElementById('row1').appendChild(buttonDivide);

//row 2
document.getElementById('row2').appendChild(button7);
document.getElementById('row2').appendChild(button8);
document.getElementById('row2').appendChild(button9);
document.getElementById('row2').appendChild(buttonMultiply);

//row3 
document.getElementById('row3').appendChild(button4);
document.getElementById('row3').appendChild(button5);
document.getElementById('row3').appendChild(button6);
document.getElementById('row3').appendChild(buttonSubstract);

//row4
document.getElementById('row4').appendChild(button1);
document.getElementById('row4').appendChild(button2);
document.getElementById('row4').appendChild(button3);
document.getElementById('row4').appendChild(buttonSum);

//row5
document.getElementById('row5').appendChild(button0);
document.getElementById('row5').appendChild(buttonComma);
document.getElementById('row5').appendChild(buttonequal);

//receive input
buttonAC.id = 'buttonAC'
buttonSign.id = 'buttonSign';
buttonPercentage.id = 'buttonPercentage';
buttonDivide.id = 'buttonDivide';
button7.id = 'button7';
button8.id = 'button8';
button9.id = 'button9';
buttonMultiply.id = 'buttonMultiply';
button4.id = 'button4';
button5.id = 'button5';
button6.id = 'button6';
buttonSubstract.id = 'buttonSubstract';
button1.id = 'button1';
button2.id = 'button2';
button3.id = 'button3';
buttonSum.id = 'buttonSum';
button0.id = 'button0';
buttonComma.id = 'buttonComma';
buttonequal.id = 'buttonEqual';

button1.addEventListener('click', e => {
    console.log(1);
})

button2.addEventListener('click', e => {
    console.log(2);
})

button3.addEventListener('click', e => {
    console.log(3);
})

button4.addEventListener('click', e => {
    console.log(4);
})

button5.addEventListener('click', e => {
    console.log(5);
})

button6.addEventListener('click', e => {
    console.log(6);
})

button7.addEventListener('click', e => {
    console.log(7);
})

button8.addEventListener('click', e => {
    console.log(8);
})

button9.addEventListener('click', e => {
    console.log(9);
})

button0.addEventListener('click', e => {
    console.log(0);
})

buttonEqual.addEventListener('click', e => {
    console.log('=');
})

buttonSum.addEventListener('click', e => {
    console.log('+');
})

buttonSubstract.addEventListener('click', e=> {
    console.log('-')
})

buttonComma.addEventListener('click', e => {
    console.log(',');
})

buttonMultiply.addEventListener('click', e => {
    console.log('x');
})

buttonDivide.addEventListener('click', e => {
    console.log('/');
})

buttonPercentage.addEventListener('click', e => {
    console.log('%');
})

buttonSign.addEventListener('click', e => {
    console.log('+/-');
})

buttonAC.addEventListener('click', e => {
    console.log('AC');
})











