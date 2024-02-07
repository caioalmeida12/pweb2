// 1: Implementação Básica do Singleton
// Implemente o padrão Singleton para uma classe Configuracao que armazena configurações do sistema, como por exemplo, o tema (claro ou escuro), idioma e tamanho da fonte.
// Garanta que apenas uma instância da classe Configuracao possa existir no programa.
// Demonstre o uso dessa classe acessando a instância singleton para alterar e acessar as configurações.

interface IConfiguracao {
    tema: string;
    idioma: string;
    tamanhoFonte: number;
}

class Configuracao implements IConfiguracao {
    tema: string;
    idioma: string;
    tamanhoFonte: number;

    private static instance: Configuracao;

    private constructor() {
        this.tema = 'claro';
        this.idioma = 'pt-br';
        this.tamanhoFonte = 16;
    }

    public static getInstance(): Configuracao {
        if (!Configuracao.instance) {
            Configuracao.instance = new Configuracao();
        }
        return Configuracao.instance;
    }
}

const configuracoes = Configuracao.getInstance()

console.table(configuracoes)

configuracoes.tema = "escuro"
configuracoes.idioma = "en-us"

console.table(configuracoes)