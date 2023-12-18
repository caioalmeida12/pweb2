import { useState } from 'react'

const newCoordinate = (x: number) => Math.floor(Math.random() * x * 0.9)

function App() {
  const handleMouseEnter = (event: React.MouseEvent<HTMLHeadingElement>) => {
    console.log(event.clientX, event.clientY)

    setPosicao({
      x: newCoordinate(window.innerWidth),
      y: newCoordinate(window.innerHeight),
    })
  }

  const [posicao, setPosicao] = useState({
    x: newCoordinate(window.innerWidth),
    y: newCoordinate(window.innerHeight),
  })

  return (
    <>
      <h1 onMouseEnter={handleMouseEnter} style={{
        position: "fixed",
        left: posicao.x,
        top: posicao.y,
        color: "red",
        backgroundColor: "black",
        padding: "10px",
      }}>Clique aqui</h1>

      <h2>Posição atual: <br /> {posicao.x}px <br />{posicao.y}px </h2>

      <footer>Projeto feito na aula inicial da N2 - Caio de Almeida Araujo - 18/12/2023</footer>
    </>
  )
}

export default App
