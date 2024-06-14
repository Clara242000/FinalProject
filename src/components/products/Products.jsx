
// import { produse } from '../../data/data';

import ProdusCard from '../../pages/ProdusCard'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Products.css';
import { useContext, useEffect, useState } from 'react';
import Search from '../search/Search';

import {useNavigate} from 'react-router-dom';
import { TokenContext } from '../../App';

//GET

//mutat in home

//version1
// function retrieveProducts(){
//  return fetch('http://localhost:3000/produse')
//    .then((response) => response.json());
// }


//version2
async function retrieveProducts(token, setProduse, navigate ){
  
  try{
    const response = await fetch('http://localhost:3000/produse', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    });

    if (response.status === 401) {
      navigate('/login');
    }

    const productsFromServer = await response.json();
      setProduse(productsFromServer);
   }
   catch(error){
    console.error(error);
   }
   
  }
 

//pana aici 



function Products() {
  
  const [searchTerm , setSearchTerm] = useState('');
  const navigator = useNavigate();
  const { token } = useContext(TokenContext);

  function onSearchChange(_searchTerm){
    setSearchTerm(_searchTerm) ;
  }
   

const[produse, setProduse ]= useState([]);
// const [loading , setLoading ] = useState(false)
console.log(produse);
  // const filteredProduse = produse.filter(({ title }) => 
  //   title.includes(searchTerm.toUpperCase()));
  useEffect(() => {
   retrieveProducts(token, setProduse, navigator);
  }, [token, navigator]);
  // if(loading){
  //   return <p>Loading ...</p>
  // }
  const filteredProduse = produse.filter(( {title} ) => 
  title.toUpperCase().includes(searchTerm.toUpperCase()));
   const productsNotFound =  filteredProduse.length === 0 ;

  // version1 
  //  useEffect(() => {
  //   async function getProducts() {

  //     const productsFromServer = await retrieveProducts();

  //     setProduse(productsFromServer);
  //   }

  //   getProducts();
  //  }, []);


   //version2


   return(
      <section>
          
            {/* <h1>Our Products!</h1> */}
            {/* <h2>Women Men Kids</h2> */}
          
          <Search onSearchChange={onSearchChange}/>
          
           {productsNotFound ? (
            <p>404 There were no products found for the given search input.</p>
        ) : (
          <section>
            <h3>Women</h3>
          <ul className='produs-list'>
            {
              filteredProduse.filter((produs) => produs.title === 'Leotard Woman').map((produsItem) => (
            <Link key={produsItem.id} to={`/produs/ ${produsItem.id} `}>
            <ProdusCard produsElement = {produsItem} />           
            </Link>

            ))}
          </ul>         
            <br />
              <h3>Kids</h3>
           <ul className='produs-list'>
           {
          filteredProduse.filter((produs) => produs.title === 'Leotard Kids').map((produsItem) => (
           <Link key={produsItem.id} to={`/produs/ ${produsItem.id} `}>
           <ProdusCard produsElement = {produsItem} />           
           </Link>

           ))}
         </ul> 
          <br />
           <h3>Men</h3>
          <ul className='produs-list'>
          {
         filteredProduse.filter((produs) => produs.title === 'Men').map((produsItem) => (
          <Link key={produsItem.id} to={`/produs/ ${produsItem.id} `}>
          <ProdusCard produsElement = {produsItem} />           
          </Link>

          ))}
        </ul> 
          <br />
        <h3>Other</h3>
          <ul className='produs-list'>
          {
         filteredProduse.filter((produs) => produs.title !== 'Men' && produs.title !== 'Leotard Woman' && produs.title !== 'Leotard Kids' ).map((produsItem) => (
          <Link key={produsItem.id} to={`/produs/ ${produsItem.id} `}>
          <ProdusCard produsElement = {produsItem} />           
          </Link>

          ))}
        </ul> 
          </section>
           )
           }
      </section>
    );
}
 
export default Products;

Products.propTypes = {
  searchTerm: PropTypes.string,
  
}


