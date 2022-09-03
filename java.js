// create the screen and keyboard for the calculator
const screen = document.createElement('div');
const keyboard = document.createElement('div');
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

buttonAC.className = 'buttonAC'
buttonSign.className = 'buttonSign';
buttonPercentage.className = 'buttonPercentage';
buttonDivide.className = 'buttonDivide';
button7.className = 'button7';
button8.className = 'button8';
button9.className = 'button9';
buttonMultiply.className = 'buttonMultiply';
button4.className = 'button4';
button5.className = 'button5';
button6.className = 'button6';
buttonSubstract.className = 'buttonSubstract';
button1.className = 'button1';
button2.className = 'button2';
button3.className = 'button3';
buttonSum.className = 'buttonSum';
button0.className = 'button0';
buttonComma.className = 'buttonComma';
buttonequal.className = 'buttonequal';

// add content to the buttons
buttonAC.textContent = 'AC'
buttonSign.textContent = '+/-';
buttonPercentage.textContent = '%';
buttonDivide.textContent = '/';
button7.textContent = '7';
button8.textContent = '8';
button9.textContent = '9';
buttonMultiply.textContent = '*';
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
screen.textContent = 'THIS IS THE SCREEN';

//place screen and keyboard inside the container
document.getElementById('container').appendChild(screen);
document.getElementById('container').appendChild(keyboard);

// place rows inside the keyboard
document.getElementById('container').appendChild(row1);
document.getElementById('container').appendChild(row2);
document.getElementById('container').appendChild(row3);
document.getElementById('container').appendChild(row4);
document.getElementById('container').appendChild(row5);


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
