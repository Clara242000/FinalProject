
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './components/products/Products';
import WhatsNew from './pages/WhatsNew';
import Contact from './pages/Contact';
import './App.css';
import EditYourProfile from './components/auth/edityourprofile/EditYourProfile';
import ProduseDetails from './components/produse-details/ProduseDetails';
import CreateProduct from './components/create-product/CreateProduct';
import { Register } from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import EditProduct from './components/edit-product/EditProduct';
import React, { useState } from 'react';

export const TokenContext = React.createContext();
export const IdContext = React.createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  const [id, setId] = useState(localStorage.getItem('user'));
  console.log(id);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <IdContext.Provider value={{ id, setId }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/produs/:idFromPath" element={<ProduseDetails />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/edit-profile/:id" element={<EditYourProfile />} />
          <Route path="/edit-product/:idFromPath" element={<EditProduct />} />
        </Routes>
      </Router>
      </IdContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
