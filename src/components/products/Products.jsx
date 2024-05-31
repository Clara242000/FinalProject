
// import { produse } from '../../data/data';

import ProdusCard from '../../pages/ProdusCard'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Products.css';
import { useEffect, useState } from 'react';
//GET

//mutat in home

//version1
// function retrieveProducts(){
//  return fetch('http://localhost:3000/produse')
//    .then((response) => response.json());
// }


//version2
async function retrieveProducts(setProduse ){
  
  try{
    const response = await fetch('http://localhost:3000/produse');
    const productsFromServer = await response.json();
      setProduse(productsFromServer);
   }
   catch(error){
    console.error(error);
   }
   
  }
 

//pana aici 



function Products({searchTerm}) {
const[produse, setProduse ]= useState([]);
// const [loading , setLoading ] = useState(false)
console.log(produse);
  // const filteredProduse = produse.filter(({ title }) => 
  //   title.includes(searchTerm.toUpperCase()));
  useEffect(() => {
   retrieveProducts(setProduse);
  }, []);
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
          <header>
            <h1>Our Products!</h1>
            <h2>Women Men Kids</h2>
          </header>

          
           {productsNotFound ? (
            <p>404 There were no products found for the given search input.</p>
        ) : (
          <section>
            <h3>Woman</h3>
          <ul className='produs-list'>
            {
              filteredProduse.filter((produs) => produs.category === 'Leotard Woman').map((produsItem) => (
            <Link key={produsItem.id} to={`/produs/ ${produsItem.id} `}>
            <ProdusCard produsElement = {produsItem} />           
            </Link>

            ))}
          </ul>         

              <h3>Kids</h3>
           <ul className='produs-list'>
           {
          filteredProduse.filter((produs) => produs.category === 'Leotard Kids').map((produsItem) => (
           <Link key={produsItem.id} to={`/produs/ ${produsItem.id} `}>
           <ProdusCard produsElement = {produsItem} />           
           </Link>

           ))}
         </ul> 

           <h3>Men</h3>
          <ul className='produs-list'>
          {
         filteredProduse.filter((produs) => produs.category === 'Men').map((produsItem) => (
          <Link key={produsItem.id} to={`/produs/ ${produsItem.id} `}>
          <ProdusCard produsElement = {produsItem} />           
          </Link>

          ))}
        </ul> 

        <h3>Other</h3>
          <ul className='produs-list'>
          {
         filteredProduse.filter((produs) => produs.category !== 'Men' && produs.category !== 'Leotard Woman' && produs.category !== 'Leotard Kids' ).map((produsItem) => (
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


