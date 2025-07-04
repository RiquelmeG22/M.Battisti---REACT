import React from 'react'

const Evento = () => {

    const handleClick = () => (
        console.log("Executou a função")
    );

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        <div>
            <button onClick={handleClick}>Botao Função</button>
        </div>
    </div>
  )
}

export default Evento