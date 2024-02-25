import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (




    <>
      <main>
        <div className='container'>
            <img className='photo' src="https://i.pinimg.com/736x/fd/6c/cd/fd6ccdb97d1857a470f748a280ccfd46.jpg"/>
            <h1>
                Lívia Alves
                <span className='locality'>Barbalha, Ceará</span>
            </h1>

            <div className='profession'>
                <span >"Desenvolvedora Front-end"</span>
            </div>

            <div className='container-buttons'>
                <button>GitHub</button>
                <button>Gmail</button>
                <button>Linkedin</button>
                <button>Instagram</button>
            </div>
        </div>
      </main>
    </>
  )
}

export default App
