import NithImage from './assets/night.jpg'
import Data from './components/Data'
import ListerRender from './components/ListerRender'
import './App.css'


function App() {

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
    </div>

  )
}

export default App
