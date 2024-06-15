
import { useContext, useEffect, useState } from 'react';
import  ProdusCard from './ProdusCard';
import './WhatsNew.css';
import {Link} from 'react-router-dom';
import { TokenContext } from '../App';

async function retrieveProducts(token, setProduse ){
  
  try{
    const response = await fetch('http://localhost:3000/produse', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    });
    const productsFromServer = await response.json();
      setProduse(productsFromServer.filter((produs) => produs.whatsnewmodel ));
   }
   catch(error){
    console.error(error);
   }
   
  }
 


function WhatsNew(){
const [products , setProducts] = useState([]);
const { token } = useContext(TokenContext);
useEffect(() => {
  retrieveProducts(token, setProducts) 
} , [token] )
  return (
  
    <ul className='trending'>
       {products.map((produs) =>(
       <Link to={'/produs/' + produs.id} key={produs.id}>
       <ProdusCard  produsElement={produs} large={true}></ProdusCard>
       </Link>
       ) )}      
    </ul>
    
  )
}

export default WhatsNew;
