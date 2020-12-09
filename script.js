let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.addEventListener('click', function(){
    inputWindow.value -= '0';
})


document.getElementById('btn_1').addEventListener('click', function () {
    // inputWindow.value -= '0';
    inputWindow.value += '1';
})
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})
document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})
//sum
document.getElementById('plus').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'plus';
    inputWindow.value = '';
})
//difference
document.getElementById('minus').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
})
//multi
document.getElementById('multy').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'multy';
    inputWindow.value = '';
})
//division
document.getElementById('division').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'division';
    inputWindow.value = '';
})
//sqrt
document.getElementById('sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqrt';
    const result = Math.sqrt(lastOperand);
    inputWindow.value = result;
})

document.getElementById('equals').addEventListener('click', function () {
    if (operation === 'plus') {
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    } else if(operation === 'minus'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    else if(operation === 'multy'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    else if(operation === 'division'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    else {
        inputWindow.value = "wrong input";
    }
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
})

