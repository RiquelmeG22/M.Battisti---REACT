import NithImage from './assets/night.jpg'
import Data from './components/Data'
import ListerRender from './components/ListerRender'
import './App.css'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragements from './components/Fragements'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'


function App() {



      // função em prop

      function showProp() {
        console.log("Evento do componente pai")

      }

      // State lift

      const [message, setMessage] = useState("")

      const handleMessage = (msg) => {
        setMessage(msg)
      }

      const cars = [
        { id: 1, marca: "Ferrai", km: 10},
        { id: 2, marca: "Volvo", km: 157},
        { id: 3, marca: "Ford", km: 244},
      ];


  return (
    <div className='App' style={{paddingBottom: "500px"}} >
      <h1>
          Avancando em React
      </h1>
      {/* Imagem em Public */}

      <img src="./img.jpg" alt="Imagem de dia" />

      {/* Imagem em Assets */}

      <img src={NithImage}alt="Alguma Coisa" />

      {/* Use State */}

      < Data />

      {/* Render de Lista */}

      < ListerRender />

      {/* render condiconal */}

      < CondicionalRender />

      {/* Props */}

      < ShowUserName name={"vanderlei ramalho"} age={24}/>

      {/* Destruturando Props */}

        < CarDetails carro={"prisma"} km={553} marca={"Chevrolet"}/>
        < CarDetails km={553} marca={"chery"} carro={"hb20"}/>

      {/* renderização de componentes com listas */}

      {cars.map((car) => (
        < CarDetails
          key={car.id}
          marca={car.marca} 
          km={car.km}/>
      ))}


      {/* fragements */}

      < Fragements />


      {/* Children */}

      < Container>
          <p>Alguma coisa</p>
      </Container>


      {/* Função em Prop */}
      < ExecuteFunction myFunction={showProp}/>


      {/* State Lift */}
      < Message msg={message}/>
      < ChangeMessage handleMessage={handleMessage}/>
    </div>


      

  )
}

export default App
