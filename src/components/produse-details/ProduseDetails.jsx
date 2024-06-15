// import { produse } from "../../data/data";
import { useParams , useNavigate} from "react-router-dom";
import './ProductsDetails.css';
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../App";


async function retrieveProduct(token, setProduct, produsid){
    console.log({produsid});
    const trimId = produsid.trim();
    const response = await fetch(`http://localhost:3000/produse/${trimId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const produs = await response.json();
   
    setProduct(produs);
}


 function ProduseDetails(){
    const [produs, setProduct] = useState({});
    const { idFromPath } = useParams();   
    // const selectedProducts = produse.find((produs) =>produs.id === idFromPath);
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);

    useEffect( () => {
       retrieveProduct(token, setProduct, idFromPath); 
    }, [idFromPath, token]);

    useEffect(() => {
        if(!produs){
            navigate('/');
        }
    }, [produs, navigate]);

    if (!produs){
    return;
        // return (
        //     <h1>404: Selected product does not exist anymore!</h1>
        // )
    }
    
    const {title, imageUrl, category , id} = produs;

    function deleteProduct(){
        const userConfirmedAction = confirm('Are you sure you want to delete the product?')

        if(userConfirmedAction) {

            fetch(`http://localhost:3000/produse/${id}` , {
                method:'DELETE',
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
    
            .then(() => navigate('/products'));
        }
        
        }

        function updateButton(){
            navigate(`/edit-product/${id}`)
        }


        // function editProduct(){
        //     navigate(`/edit-product/${id}`);
             
        // }

         
    return(
        <section className="produs-detail">
            <p className="produs-detail__category" >
               <strong>Category :</strong> <i>{category}</i>  
            </p>
           
                <h3>{title}</h3>
            
            < img src={imageUrl}  />

            <div className="button-edit-delete">
            <button className="button-produsdetails" onClick={updateButton}>Edit product</button>
            <button  className="button-produsdetails" onClick={deleteProduct}>Delete product</button>
            </div>
            

        </section>
    )
}

export default ProduseDetails;


//de la wili: 
/**
 *! REST -> Representational State Transfer
 *! Get a list of all resources (ex: movies) GET: /movies 
 *! Get a single a single resource from the server: GET: /movies/:id
 */



 /**
  * REST API -> Representational State Transfer 
  * 
  * GET /movies
  * GET /movies/:id
  * 
  * DELETE /movies/:id
  * 
  * PUT /movies/:id
  * 
  */