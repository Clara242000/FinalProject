// import { produse } from '../../data/data';
import ProdusCard from '../../pages/ProdusCard'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Products.css';
import { useEffect, useState } from 'react';


//mutat in home

//version1
// function retrieveProducts(){
//  return fetch('http://localhost:3000/produse')
//    .then((response) => response.json());
// }


//version2
async function retrieveProducts(setProduse){
  const response = await fetch('http://localhost:3000/produse');
  const productsFromServer = await response.json();
    setProduse(productsFromServer);
 }

//pana aici 



function Products({searchTerm}) {
const[produse, setProduse ]= useState([]);
  const filteredProduse = produse.filter(({ title }) => 
    title.includes(searchTerm.toUpperCase())
   );
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
   useEffect(() => {
    retrieveProducts(setProduse);
   }, []);

   return(
      <section>
          <header>
            <h1>Our Products!</h1>
            <h2>Women Men Kids</h2>
          </header>

          
           {productsNotFound ? (
            <p>404 There were no products found for the given search input.</p>
        ) : (

          <ul className='produs-list'>
            {
           filteredProduse.map((produsItem) => (
            <Link key={produsItem.id} to={`/produs/ ${produsItem.id} `}>
            <ProdusCard produsElement = {produsItem} />           
            </Link>

            ))}
          </ul>         
           )
           }
      </section>
    );
}
 
export default Products;

Products.propTypes = {
  searchTerm: PropTypes.string,
  
}


