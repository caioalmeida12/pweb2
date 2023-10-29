const maximumFractionDigits = 5;

let operationType, indexOfOperationType;

const allowedOperators = [
    'ADDITION',
    'SUBTRACTION',
    'MULTIPLICATION',
    'DIVISION',
    'PERCENTAGE',
]

const handleInputs = (btn) => {
    // -----------------------------------------------------------
    // CUIDA DOS BOTÕES NÃO-NUMÉRICOS OU DE OPERAÇÕES
    // -----------------------------------------------------------

    // Impede que o usuário digite um operador antes de um número
    if (isNaN(btn.value) && input.length === 0) return

    // Impede que o usuário digite um operador após outro operador
    if (isNaN(btn.value) && isNaN(input[input.length - 1])) return

    // Impede que o usuário aperte o botão de igual caso não haja operação
    if (btn.name === 'EVALUATE' && !indexOfOperationType) return

    // Caso já haja uma operação, executa o cálculo antes de continuar
    if (isNaN(btn.value) && indexOfOperationType) {
        handleEvaluateElementClick();
    }

    // Caso o número no input não seja inteiro, não permite que o usuário digite mais de uma vírgula
    if (btn.value === '.' && input.includes('.')) return


    // Se o botão for clear, limpa a tela
    if (btn.name === 'CLEAR') {
        return clearScreenValue();
    }

    // Se o botão for erase, apaga o último valor
    if (btn.name === 'ERASE') {
        input.pop();

        return updateScreenValue();
    }

    // Se o botão for de 00, adiciona cada zero separadamente
    if (btn.value == '00') {
        input.push('0', '0');

        return updateScreenValue();
    }

    // Se o botão for de operação, o adiciona à tela, anota o tipo de operação e o índice
    if (allowedOperators.includes(btn.name)) {
        operationType = btn.name;
        indexOfOperationType = input.length;

        input.push({
            'ADDITION': '+',
            'SUBTRACTION': '-',
            'MULTIPLICATION': '*',
            'DIVISION': '/',
            'PERCENTAGE': '%',
        }[btn.name]);

        return updateScreenValue();
    }

    // ------------------------------------
    // CUIDA DO CÁLCULO
    // ------------------------------------
    if (btn.name === 'EVALUATE') {
        handleEvaluateElementClick();
    }

    input.push(btn.value);

    // ------------------------------------
    // CUIDA DOS VALORES EXIBIDOS NA TELA
    // ------------------------------------
    updateScreenValue()

}