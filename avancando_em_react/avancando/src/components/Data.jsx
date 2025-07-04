import { useState } from "react"


const Data = () => {
   let someData = 10;

   const [novoNumero, setAnotherNumber] = useState(20);

   const [novoPar, setNumberPar] = useState(18);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variavel</button>
        </div>
        <div>
            <p>Valor: {novoNumero}</p>
            <button onClick={() => setAnotherNumber(8)}>Mudar State</button>
        </div>
        <div>
            <p>Valor: {novoPar}</p>
            <button onClick={() => setNumberPar(28)}>Mudar Numero Par</button>
        </div>
    </div>
  );
};

export default Data;  