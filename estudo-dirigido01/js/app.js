const divImagemPrincipal = document. querySelector( "#imagem-principal")
const imagemPrincipal = divImagemPrincipal.querySelector("img" )
const textoAlternativo = divImagemPrincipal. querySelector(".texto-alternativo")
const btnProximo = divImagemPrincipal. querySelector(".proximo" )
const btnAnterior = divImagemPrincipal.querySelector(".anterior")
const todasImagens = document. querySelectorAll("#imagens img")
let idImagemAtiva = 0

const proximaImagem = function () {
    idImagemAtiva++
    if(idImagemAtiva >= todasImagens. length ) idImagemAtiva = 0
    selecionarImagem()
}

const voltarImagem = function () {
    idImagemAtiva--
    if(idImagemAtiva < 0) idImagemAtiva = todasImagens. length - 1
    selecionarImagem()
}

const selecionarImagem = function () {
    imagemPrincipal.src = todasImagens[idImagemAtiva].src
    todasImagens.forEach( function(imagem) {
        imagem.classList = ""
    })
    todasImagens[idImagemAtiva].classList.add("")
}

btnAnterior.addEventListener("click", voltarImagem)
btnProximo.addEventListener("click", proximaImagem)

todasImagens.forEach( function(imagem, numeroImagem) {
    imagem.addEventListener("click", function() {
        todasImagens.forEach(imagem => imagem.classList = "")
        imagem.classList.add("selecionada")      
        
        imagemPrincipal.src = imagem.src
        imagemPrincipal.alt = imagem.alt

        textoAlternativo.textContent = imagem.alt


    })
})
