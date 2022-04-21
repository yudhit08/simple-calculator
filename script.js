const optTopBtn = document.getElementById('operatorTop')
const numBtn = document.getElementById('number')
const optSideBtn = document.getElementById('operatorSide')
const display = document.querySelector('#display p')
const clearCalc = document.querySelector('#operatorTop button.clear')
const historyNum = document.getElementById('history-number')
var hiddenNumber = 0
var result = 0
var opt
var simpan = []

function cekDisplay() {
    if (display.innerText === '0' || display.innerText === '+' || display.innerText === '-' || display.innerText === 'x' || display.innerText === '/') {
        display.innerText = ''
    }
}

optTopBtn.addEventListener('click', function (event) {
    if (event.target.className === 'clear') {
        display.innerText = '0'
        historyNum.innerText = '0'
        simpan = []
    }
    else if (event.target.className === 'delete') {
        if (simpan.length == 1) {
            display.innerText = '0'
        }
        else {
            simpan.pop()
            for (let i = 0; i < simpan.length; i++) {
                display.innerText = simpan.join('');
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
        simpan.push(event.target.innerText)
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
            historyNum.innerText = display.innerText + ' ' + opt
            hiddenNumber = parseInt(display.innerText)
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
            bantu.split('')
            simpan = []
            for (let i = 0; i < bantu.length; i++) {
                simpan[i] = bantu[i]
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