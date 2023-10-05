import { useState } from 'react'

import './App.css'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div  >
      <h1 className='' >Daniel Halsall</h1>
    </div>
      
    <div>
      <h1>test</h1>
    </div>

    <Footer/>
      
    </>
  )
}

export default App
