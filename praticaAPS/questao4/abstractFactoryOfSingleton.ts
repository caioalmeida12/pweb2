// 4: Combinação de Padrões: Abstract Factory com Singleton
// Considere que você está desenvolvendo um framework de renderização de gráficos que deve suportar diferentes bibliotecas gráficas (por exemplo, OpenGL, DirectX).
// Use o padrão Abstract Factory para definir uma interface comum para criar famílias de objetos relacionados à renderização (como renderizadores de texturas, sombras e modelos). 
// Em seguida, implemente cada fábrica concreta como um Singleton para garantir que apenas uma instância de cada fábrica seja usada durante a execução do programa. 
// Demonstre como um cliente pode usar esses padrões combinados para acessar recursos de renderização.

interface ITextura {
    renderizar(): void
}

interface ISombra {
    renderizar(): void
}

interface IModelo {
    renderizar(): void
}

interface IRenderer {
    createTextura(): ITextura
    createSombra(): ISombra
    createModelo(): IModelo
}

class OpenGL implements IRenderer {
    createTextura(): ITextura {
        return { renderizar: () => console.log("Textura OpenGL") }
    }

    createSombra(): ISombra {
        return { renderizar: () => console.log("Sombra OpenGL") }
    }

    createModelo(): IModelo {
        return { renderizar: () => console.log("Modelo OpenGL") }
    }
}

class DirectX implements IRenderer {
    createTextura(): ITextura {
        return { renderizar: () => console.log("Textura DirectX") }
    }

    createSombra(): ISombra {
        return { renderizar: () => console.log("Sombra DirectX") }
    }

    createModelo(): IModelo {
        return { renderizar: () => console.log("Modelo DirectX") }
    }
}

interface IInstance {
    rendererType: string
    value: IRenderer
}

type RendererTypes = "OpenGL" | "DirectX"

class RendererSingletonAbstractFactory {
    private static instances: IInstance[] = []

    static getInstance(rendererType: RendererTypes){
        const hasInstance = this.instances.find((entry) => entry.rendererType == rendererType)
        if (hasInstance?.value) return hasInstance.value

        if (rendererType == "OpenGL") this.instances.push({ rendererType: "OpenGL", value: new OpenGL()})
        if (rendererType == "DirectX") this.instances.push({ rendererType: "DirectX", value: new DirectX()})

        console.table(this.instances)
        
        return this.instances[this.instances.length - 1].value
    }
}

const openGL = RendererSingletonAbstractFactory.getInstance("OpenGL")

openGL.createSombra().renderizar()

const openGL2 = RendererSingletonAbstractFactory.getInstance("OpenGL")

openGL2.createSombra().renderizar()

const directX = RendererSingletonAbstractFactory.getInstance("DirectX")

directX.createModelo().renderizar()

const directX2 = RendererSingletonAbstractFactory.getInstance("DirectX")

directX2.createModelo().renderizar()