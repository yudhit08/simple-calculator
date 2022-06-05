var keys = document.querySelectorAll('button')

var operators = ['+', '-', 'x', '÷', '^']
// Set decimal flag for use later
var decimalAdded = false

// loop through all keys
for (var i = 0; i < keys.length; i++) {
    //add onclick event to the keys
    keys[i].onclick = function (e) {
        // Get the input and button values
        var input = document.querySelector('#display p')
        var history = document.querySelector('#history-number p')
        var inputVal = input.innerHTML
        var btnVal = this.innerHTML

        if (input.innerHTML == '0') {
            input.innerHTML = '0' 
        }

        else if (btnVal == 'DEL') {
            if (input.innerHTML.length <= 1) {
                input.innerHTML = '0'
            } else {
                input.innerHTML = input.innerHTML.slice(0, -1)
            }
            decimalAdded = false
        }

        // If clear key is pressed, erase everything
        else if (btnVal == 'C') {
            input.innerHTML = '0'
            history.innerHTML = '0'
            decimalAdded = false
        }

        // If eval key is pressed, calculate and display the result
        else if (btnVal == '=') {
            var equation = inputVal //append equation to variable
            var lastChar = equation[equation.length - 1] //target the end of the eval string

            // Use regex to replace all instances of x, ÷, ^ with *, / and **
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*')

            //Use regex to remove decimals from the end of an equation
            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '')

            // use javascript's eval function to get the result
            if (equation) {
                history.innerHTML = input.innerHTML
                input.innerHTML = eval(equation)
            }
            decimalAdded = false
        }

        // Javascript checks

        // No two operators should be added consecutively.		
        else if (operators.indexOf(btnVal) > -1) {
            // Get the last character from the equation
            var lastChar = inputVal[inputVal.length - 1]

            // Only add operator if input is not empty 
            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal

            // Allow minus operator if the string is empty
            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal

            // Replace the last operator (if exists) with the newly pressed operator
            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal)
            }

            decimalAdded = false
        }
        // allow decimal point input
        else if (btnVal == '.') {
            if (!decimalAdded) {
                input.innerHTML += btnVal
                decimalAdded = true
            }
        }

        // if any other key is pressed, just append it after the decimal
        else {
            input.innerHTML += btnVal
        }

        // prevent page jumps
        e.preventDefault()
    }
}

document.onkeydown = (event) => {
    var key_press = String.fromCharCode(event.keyCode)
    var key_code = event.keyCode
    var input = document.querySelector('#display p')
    var inputVal = input.innerHTML
    var history = document.querySelector('#history-number p')
    var btnVal = this.innerHTML
    var lastChar = inputVal[inputVal.length - 1]
    var equation = inputVal
    // Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively. 
    equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**')

    if (key_press == 1) {
        input.innerHTML += key_press
    }
    if (key_press == 2) {
        input.innerHTML += key_press
    }
    if (key_press == 3 || key_code == 32) {
        input.innerHTML += key_press
    }
    if (key_press == 4) {
        input.innerHTML += key_press
    }
    if (key_press == 5) {
        input.innerHTML += key_press
    }
    if (key_press == 6 && event.shiftKey == false) {
        input.innerHTML += key_press
    }
    if (key_press == 7) {
        input.innerHTML += key_press
    }
    if (key_press == 8 && event.shiftKey == false) {
        input.innerHTML += key_press
    }
    if (key_press == 9) {
        input.innerHTML += key_press
    }
    if (key_press == 0) {
        input.innerHTML += key_press
    }

    // Cature operators and prevent from addint two consecutuve operators

    if ((input.Val != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
        document.querySelector('#display p').innerHTML += '+'
    }
    if ((input.Val != '' && operators.indexOf(lastChar) == -1 && key_code == 189) || (input.Val != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
        document.querySelector('#display p').innerHTML += '-'
    }
    if ((input.Val != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (input.Val != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
        document.querySelector('#display p').innerHTML += 'x'
    }
    if ((input.Val != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (input.Val != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
        document.querySelector('#display p').innerHTML += '÷'
    }
    if ((input.Val != '' && operators.indexOf(lastChar) == -1 && key_code == 54 && event.shiftKey)) {
        document.querySelector('#display p').innerHTML += '^'
    }
    if (key_code == 13 || key_code == 187 && event.shiftKey == false) {
        history.innerHTML = input.innerHTML
        input.innerHTML = eval(equation);
        //reset decimal added flag
        decimalAdded = false;
    }
    if (key_code == 8 || key_code == 46) {
        input.innerHTML = input.innerHTML.slice(0, -1);
        decimalAdded = false;
    }
}