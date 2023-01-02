function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const TypedNumberField = document.getElementById('display-typed-number');
    const previousTypedNumber = TypedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            TypedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const newDigits = digits.join('');
            TypedNumberField.value = newDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number
        TypedNumberField.value = newTypedNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const randomPinFild = document.getElementById('display-pin');
    const randomPin = randomPinFild.value;

    const typedPinField = document.getElementById('display-typed-number');
    const typedPin = typedPinField.value;
    
    const pinSuccessField = document.getElementById('pin-success');
    const pinFailField = document.getElementById('pin-fail');

    if (randomPin === typedPin) {
        pinSuccessField.style.display = 'block';
        pinFailField.style.display = 'none';
    }
    else {
        pinFailField.style.display = 'block';
        pinSuccessField.style.display = 'none';
    }
})