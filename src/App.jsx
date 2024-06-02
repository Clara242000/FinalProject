
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './components/products/Products';
import WhatsNew from './pages/WhatsNew';
import Contact from './pages/Contact';
import './App.css';


import ProduseDetails from './components/produse-details/ProduseDetails';
import CreateProduct from './components/create-product/CreateProduct';
import { Register } from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import EditProduct from './components/edit-product/EditProduct'
import React, { useState } from 'react';


// export const ProdusContext = React.createContext();  -de la willi

export const TokenContext = React.createContext();

function App (){
  // const [produse , setProduse] = useState([]); 
  // - de la willi
  const [token, setToken] = useState(localStorage.getItem('accessToken'));

  return(
    <TokenContext.Provider value={{ token, setToken }}>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        {/* <ProdusContext value = {{produse , setProduse}}>  - de la willi */}
          <Route path="/products" element={<Products  />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
        {/* </ProdusContext>  - de la willi*/}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/produs/:idFromPath" element = {<ProduseDetails/>}/>
          <Route path='/create-product' element={<CreateProduct/>}></Route>
          <Route path='/edit-product/:idFromPath' element={<EditProduct/>}></Route>
          {/* <Route path='/edit-movie/:idFromPath' element={<CreateProduct/>}></Route> - de la willi */}
        </Routes>


        {/* <Home></Home> */}
        
      </Router>
    </TokenContext.Provider>
);
}


export default App;
