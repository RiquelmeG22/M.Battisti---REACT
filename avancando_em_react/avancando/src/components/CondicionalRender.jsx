import React from 'react'

const CondicionalRender = () => {

    const x = "";

    const name = "riquelme";

  return (
    // render condicional

    <div>
        <h3>Isso será exibido?</h3>
        { x && <p>Se x for true sim!</p>}

        <h4>Render ternario</h4>

    {/*  else  */}
    {name === "riquelme" ?(
      <div>
        <h1>Olá {name}</h1>
      </div>
    ) : (
      <div>
        <p>Nome não encontrado</p>
      </div>
    )}
    </div>

  )
}

export default CondicionalRender