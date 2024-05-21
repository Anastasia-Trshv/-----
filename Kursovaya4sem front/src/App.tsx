//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { SupplyProduct } from './components/SupplyCard';
import { supplies } from './data/Supplies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home_page';
import { Catalog } from './Pages/catalog_page';
import { ShopCart } from './Pages/shopcart_page';
import { Login } from './Pages/login_page';
import { Registrating } from './Pages/registration_page';

function App() {
  //const [count, setCount] = useState(0)

  return (


    
    <>
    
    
     <Header></Header>
      <SupplyProduct supply={supplies[0]}></SupplyProduct>


      <Router>
      <Routes>
        <Route  path="/"  element ={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route  path="/cart"  element ={<ShopCart/>} />
        <Route path="/log_in" element={<Login/>} />
        <Route  path="/registration"  element ={<Registrating/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
 