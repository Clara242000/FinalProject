// import { produse } from "../../data/data";
import { useParams , useNavigate} from "react-router-dom";
import './ProductsDetails.css';
import { useEffect, useState } from "react";


async function retrieveProduct(setProduct, produsid){
    console.log({produsid});
    const trimId = produsid.trim();
    const response = await fetch(`http://localhost:3000/produse/${trimId}`);
    const produs = await response.json();

    setProduct(produs);
}


 function ProduseDetails(){
    const [produs, setProduct] = useState({});
    const { idFromPath } = useParams();   
    // const selectedProducts = produse.find((produs) =>produs.id === idFromPath);
    const navigate = useNavigate();

    useEffect( () => {
       retrieveProduct(setProduct, idFromPath); 
    }, []);

    useEffect(() => {
        if(!produs){
            navigate('/');
        }
    }, [produs]);

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
                method:'DELETE'
            })
    
            .then(() => navigate('/'));
        }
        
        }


        function editProduct(){
            navigate(`/edit-movie/${id}`)
        }


    return(
        <section>
            <header>
                <h3>{title}</h3>
            </header>

            < img src={imageUrl}  />

            <p className="produs-detail__category" >Category : {category}</p>
            
            <button onClick={deleteProduct}>Delete product</button>
            <button onClick={editProduct}>Edit product</button>

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