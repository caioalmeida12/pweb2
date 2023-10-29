const currentInputElement = document.querySelector('.currentInput');
const answerScreenElement = document.querySelector('.answerScreen');

const updateScreenValue = () => {
    const formattedInput = formatNumber(input.join('')).ptBr;

    if (formattedInput !== 'NaN') {
        return currentInputElement.innerHTML = formattedInput;
    }

    currentInputElement.innerHTML = input.join('');

    // answerScreenElement.innerHTML = new Intl.NumberFormat().format(input.join(''));
}

const clearScreenValue = () => {
    input = [];
    currentInputElement.className = 'currentInput'
    answerScreenElement.className = 'answerScreen';
    answerScreenElement.style.color = " rgba(150, 150, 150, 0.87)";

    updateScreenValue();
}