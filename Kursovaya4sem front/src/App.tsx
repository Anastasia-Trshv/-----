//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { SupplyProduct } from './components/SupplyCard';
import { supplies } from './data/Supplies';
function App() {
  //const [count, setCount] = useState(0)

  return (


    
    <>
    
    
     <Header></Header>
      <SupplyProduct supply={supplies[0]}></SupplyProduct>
    </>
  )
}

export default App
 