import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../App";

//citire,creare produse- GET , PUT
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
export default function EditProduct() {
    const navigate = useNavigate();
    const { idFromPath } = useParams();
    const { token } = useContext(TokenContext);
    const [product, setProduct] = useState({
        title: '',
        imageUrl: '',
        year: '',
        rating: '',
        category: ''
      });

      useEffect( () => {
        retrieveProduct(token, setProduct, idFromPath); 
     }, [idFromPath, token]);
       
      function editProduct(event) {
        event.preventDefault();
    
        const formElement = event.target;
    
        const updatedProduct = {
          title: formElement.title.value,
          imageUrl: formElement.url.value,
          year: formElement.year.value,
          rating: formElement.rating.value,
          category: formElement.category.value,
        };
    
        fetch(`http://localhost:3000/produse/${idFromPath}`, {
          method: "PUT",
          body: JSON.stringify(updatedProduct),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
          },
        })
          .then(() => navigate('/products'));
    
        console.log(updatedProduct);
    
        formElement.reset();
      }

  return ( 
    
        <form onSubmit={editProduct}>
          <fieldset>
            
           <label htmlFor="title">Title : </label>
            
            <input
              name="title"
              className="form-input"
              id="title"
              type="text"
              required
              minLength={5}
              defaultValue={product.title}
            />
          </fieldset>
    
          <fieldset>
            <label htmlFor="imgUrl">Link : </label>
          
            <input
              name="url"
              className="form-input"
              type="url"
              id="imgUrl"
              required
              defaultValue={product.imageUrl}
            />
          </fieldset>
    
          <fieldset>
            <label htmlFor="year">Date : </label>
            
            <input
              name="year"
              className="form-input"
              type="date"
              id="year"
              required
              defaultValue={product.year}
            />
          </fieldset>
    
          <fieldset>
            <label htmlFor="rating">Rating : </label>
            
            <select name="rating" id="rating" required defaultValue={product.rating}>
              <option >Select one </option>
              <option value="pg">1/3</option>
              <option value="ap">2/3</option>
              <option value="18+">3/3</option>
            </select>
          </fieldset>
    
          <fieldset>
            <div>
            <label>Category : </label>   
              <label htmlFor="product"> Woman</label>
              <input
                name="category"
                type="radio"
                value="product"
                id="product"
                required
                defaultChecked={product.category === "product"}
              />
    
              <label htmlFor="leotards">Kids</label>
              <input
                name="category"
                type="radio"
                value="leotards"
                id="leotards"
                required
                defaultChecked={product.category === "leotards"}
              />

              <label htmlFor="leotards">Men</label>
              <input
                name="category"
                type="radio"
                value="leotards"
                id="leotards"
                required
                defaultChecked={product.category === "leotards"}
              />
            </div>
          </fieldset>
          <button type="submit">Update Product</button>
    
        </form>
      );
    }
