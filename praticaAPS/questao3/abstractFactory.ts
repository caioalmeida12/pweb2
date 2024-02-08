// Imagine que você está desenvolvendo um aplicativo que deve ser compatível tanto com Windows quanto com macOS.
// Utilize o padrão Abstract Factory para criar famílias de objetos compatíveis sem especificar suas classes concretas.
// Crie duas fábricas concretas que produzem variantes de dois produtos: Botao, Janela, Cursor, Select e Input.
// Cada variante deve ser compatível com um dos sistemas operacionais.
// Demonstre como o código cliente pode utilizar a fábrica para criar produtos compatíveis com o sistema operacional em uso.

interface Botao {
    desenhar(): void;
}

interface Janela {
    desenhar(): void;
}

interface Cursor {
    desenhar(): void;
}

interface Select {
    desenhar(): void;
}

interface Input {
    desenhar(): void;
}

interface IAbstractFactory {
    createBotao(): Botao
    createJanela(): Janela
    createCursor(): Cursor
    createSelect(): Select
    createInput(): Input

}

class WindowsFactory implements IAbstractFactory {
    createBotao(): Botao {
        return { desenhar: () => console.log("Botão Windows") };
    }

    createJanela(): Janela {
        return { desenhar: () => console.log("Janela Windows") };
    }

    createCursor(): Cursor {
        return { desenhar: () => console.log("Cursor Windows") };
    }

    createSelect(): Select {
        return { desenhar: () => console.log("Select Windows") };
    }

    createInput(): Input {
        return { desenhar: () => console.log("Input Windows") };
    }
}

class MacFactory implements IAbstractFactory {
    createBotao(): Botao {
        return { desenhar: () => console.log("Botão Mac") };
    }

    createJanela(): Janela {
        return { desenhar: () => console.log("Janela Mac") };
    }

    createCursor(): Cursor {
        return { desenhar: () => console.log("Cursor Mac") };
    }

    createSelect(): Select {
        return { desenhar: () => console.log("Select Mac") };
    }

    createInput(): Input {
        return { desenhar: () => console.log("Input Mac") };
    }
}

class AbstractFactory {
    private factory: IAbstractFactory

    constructor(tipo: "Windows" | "Mac") {
        this.factory = "Windows" === tipo ? new WindowsFactory() : new MacFactory()
    }

    createUI() {
        this.factory.createBotao().desenhar()
        this.factory.createCursor().desenhar()
        this.factory.createInput().desenhar()
        this.factory.createJanela().desenhar()
        this.factory.createSelect().desenhar()
    }
}

const cliente = new AbstractFactory("Mac").createUI()