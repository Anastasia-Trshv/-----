
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import {   Routes, Route } from 'react-router-dom';
import { Catalog } from './Pages/catalog_page';
import { ShopCart } from './Pages/shopcart_page';
import { Login } from './Pages/login_page';
import { Registrating } from './Pages/registration_page';


function App() {

  return (
    <>
    
    <Header/>
    <Routes>
        <Route  path="/"  element={<Catalog/>} />
        <Route  path="/cart"  element ={<ShopCart/>} />
        <Route  path="/log_in" element={<Login/>} />
        <Route  path="/registration"  element ={<Registrating/>} />
      </Routes>
      
    </>
  )
}

export default App
 