// 2: Factory Method para Criação de Objetos de Log
// Utilizando o padrão Factory Method, crie uma estrutura que permita a criação de diferentes tipos de objetos de log (por exemplo, LogArquivo, LogConsole e LogBancoDeDados). 
// Cada tipo de log deve implementar uma interface comum ILog que inclui um método registrar(msg: String). 
// Demonstre como um cliente pode usar o Factory Method para criar diferentes tipos de logs sem conhecer a classe concreta.

interface ILog {
    registrar(msg: string): string
}

class LogArquivo implements ILog {
    registrar(msg: string): string {
        return `LogArquivo: ${msg}`
    }
}

class LogConsole implements ILog {
    registrar(msg: string): string {
        return `LogConsole: ${msg}`
    }
}

class LogBancoDeDados implements ILog {
    registrar(msg: string): string {
        return `LogBancoDeDados: ${msg}`
    }
}

class Logger {
    static createLogger(tipo: "LogArquivo" | "LogConsole" | "LogBancoDeDados"): ILog {
        if (tipo == "LogArquivo") return new LogArquivo()
        if (tipo == "LogConsole") return new LogConsole()
        return new LogBancoDeDados()
    }
}

const arquivoLogger = Logger.createLogger("LogArquivo")

console.log(arquivoLogger.registrar("Teste do logger de arquivo"))

const consoleLogger = Logger.createLogger("LogConsole")

console.log(consoleLogger.registrar("Teste do logger de console"))

const bancoDeDadosLogger = Logger.createLogger("LogBancoDeDados")

console.log(bancoDeDadosLogger.registrar("Teste do logger de bancoDeDados"))