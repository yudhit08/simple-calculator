const optTopBtn = document.getElementById('operatorTop')
const numBtn = document.getElementById('number')
const optSideBtn = document.getElementById('operatorSide')
const display = document.querySelector('#display p')
const clearCalc = document.querySelector('#operatorTop button.clear')
const historyNum = document.getElementById('history-number')
var hiddenNumber = 0
var result = 0
var opt = ''
var saveDisplay = []
var saveNumBefore

function cekDisplay() {
    if (display.innerText === '0' || display.innerText === '+' || display.innerText === '-' || display.innerText === 'x' || display.innerText === '/') {
        display.innerText = ''
    }
}

optTopBtn.addEventListener('click', function (event) {
    if (event.target.className === 'clear') {
        display.innerText = '0'
        historyNum.innerText = '0'
        saveDisplay = []
    }
    else if (event.target.className === 'delete') {
        if (saveDisplay.length == 1) {
            display.innerText = '0'
        }
        else {
            saveDisplay.pop()
            for (let i = 0; i < saveDisplay.length; i++) {
                display.innerText = saveDisplay.join('');
                saveNumBefore = display.innerText
            }
        }

    }
    else if (event.target.tagName === 'BUTTON') {
        cekDisplay()
        display.innerText += event.target.innerText
    }
})

numBtn.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        cekDisplay()
        display.innerText += event.target.innerText
        saveNumBefore = display.innerText
        saveDisplay.push(event.target.innerText)
    }
})

optSideBtn.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        cekDisplay()

        if (event.target.innerText != '=') {
            switch (event.target.innerText) {
                case '+':
                    opt = '+'
                    break;
                case '-':
                    opt = '-'
                    break;
                case 'x':
                    opt = 'x'
                    break;
                case '/':
                    opt = '/'
                    break;
            }
            historyNum.innerText = saveNumBefore + ' ' + opt
            hiddenNumber = parseInt(saveNumBefore)
            display.innerText = '0'
        } 
        else {
            historyNum.innerText = hiddenNumber + ' ' + opt + ' ' + display.innerText
            switch (opt) {
                case '+':
                    display.innerText = plus()
                    break;
                case '-':
                    display.innerText = minus()
                    break;
                case 'x':
                    display.innerText = times()
                    break;
                case '/':
                    display.innerText = divide()
                    break;
            }
            var bantu = display.innerText
            //fungsi untuk memisahkan setiap karakter menjadi array
            bantu.split('')
            //empty saveDisplay
            saveDisplay = []
            saveNumBefore = display.innerText
            for (let i = 0; i < bantu.length; i++) {
                saveDisplay[i] = bantu[i]
            }
        }
    }
})

function plus() {
    return hiddenNumber + parseInt(display.innerText)
}

function minus() {
    return hiddenNumber - parseInt(display.innerText)
}

function times() {
    return hiddenNumber * parseInt(display.innerText)
}

function divide() {
    return hiddenNumber / parseInt(display.innerText)
}