class Operations {
    constructor(firstNumber, operationType, secondNumber) {
        this.firstNumber = Number(Array.from(firstNumber).join(''));
        this.operationType = String(operationType);
        this.secondNumber = Number(Array.from(secondNumber).join(''));

        switch (this.operationType) {
            case 'ADDITION':
                this.answer = this.addition(this.firstNumber, this.secondNumber);
                break;
            case 'SUBTRACTION':
                this.answer = this.subtraction(this.firstNumber, this.secondNumber);
                break;
            case 'MULTIPLICATION':
                this.answer = this.multiplication(this.firstNumber, this.secondNumber);
                break;
            case 'DIVISION':
                this.answer = this.division(this.firstNumber, this.secondNumber);
                break;
            case 'PERCENTAGE':
                this.answer = this.percentage(this.firstNumber, this.secondNumber);
                break;
            default:
                this.answer = false;
                break;
        }
    }

    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        return a / b;
    }

    percentage(a, b) {
        return (a * b) / 100;
    }

    toString() {
        return Number(this.answer);
    }
}