let input = []

// Safely assings a number to the input variable
const assignNumberToInputValiable = (value) => {
    input = [Number(value)].toString().split('')
}

// Formats a number to a string in format 1.000,00
const formatNumber = (number) => {
    if (number instanceof Array) {
        number = Number(number.join(''))
    }

    const numberPtBr = new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits
    }).format(Number(number));

    return {
        ptBr: numberPtBr,
        raw: Number(number).toPrecision(maximumFractionDigits)
    }
}

const evaluateExpression = () => {
    let firstNumber, secondNumber;

    firstNumber = input.slice(0, indexOfOperationType);
    secondNumber = input.slice(indexOfOperationType + 1);

    const result = new Operations(firstNumber, operationType, secondNumber)

    return result;
}

const handleEvaluateElementClick = () => {
    const expression = input.join('');
    let result = formatNumber(evaluateExpression().toString());

    // Caso haja erro, mantém o valor presente na tela
    if (result.answer === false) return

    assignNumberToInputValiable(result.raw);

    currentInputElement.innerHTML = result.ptBr;
    answerScreenElement.innerHTML = expression + ' = ' + result.ptBr;

    operationType, indexOfOperationType = undefined;

    return updateScreenValue()
}