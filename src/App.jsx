
// import React from 'react';  - de la willi
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './components/products/Products';
import WhatsNew from './pages/WhatsNew';
import Contact from './pages/Contact';
import './App.css';
import Search from './components/search/Search';
import { useState } from 'react';
import ProduseDetails from './components/produse-details/ProduseDetails';
import CreateProduct from './components/create-product/CreateProduct';
import { Register } from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import EditProduct from './components/edit-product/EditProduct'


// export const ProdusContext = React.createContext();  -de la willi


function App (){
  // const [produse , setProduse] = useState([]); 
  // - de la willi
 const [searchTerm , setSearchTerm] = useState('');
 
function onSearchChange(_searchTerm){
  setSearchTerm(_searchTerm) ;
}
 
  return(

  <Router>

    <Navbar />
    <Search onSearchChange={onSearchChange}/>
    <Routes>
      <Route path="/" element={<Home />} />
    {/* <ProdusContext value = {{produse , setProduse}}>  - de la willi */}
      <Route path="/products" element={<Products searchTerm = {searchTerm }  />} />
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
);
}


export default App;
