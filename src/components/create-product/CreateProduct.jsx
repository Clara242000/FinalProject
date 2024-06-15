import { useNavigate } from "react-router-dom";
import "./CreateProduct.css";
import { useContext } from "react";
import { TokenContext } from "../../App";

//citire,creare produse-  POST

export default function CreateProduct() {
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);

  function saveProduct(event) {
    event.preventDefault();
    const formElement = event.target;

    const { title, url, year, rating, category } = formElement;

    const product = {
      title: title.value,
      imageUrl: url.value,
      year: year.value,
      rating: rating.value,
      category: category.value,
    };

    fetch("http://localhost:3000/produse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(product),
    })
        .then(() => navigate('/products'));

    console.log(product);

    formElement.reset();
  }

  return (
   
    <form onSubmit={saveProduct}>
      <h1>You can create your wish product here  </h1>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          className="form-input"
          id="title"
          type="text"
          required
          minLength={5}
          // defaultValue={selectedProduct?.title}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="imgUrl">Image Url:</label>
        <input
          name="url"
          className="form-input"
          type="url"
          id="imgUrl"
          required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="year">Year</label>
        <input
          name="year"
          className="form-input"
          type="date"
          id="year"
          required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="rating">Rating</label>
        <select name="rating" id="rating" required>
          <option >Select one </option>
          <option value="pg">PG</option>
          <option value="ap">AP</option>
          <option value="18+">18+</option>
        </select>
      </fieldset>

      <fieldset>
        <label>Category</label>

        <div>
          <label htmlFor="product">Product</label>
          <input
            name="category"
            type="radio"
            value="product"
            id="product"
            required
          />

          <label htmlFor="leotards">Leotard Woman</label>
          <input
            name="category"
            type="radio"
            value="leotards"
            id="leotards"
            required
          />
        </div>
      </fieldset>
      <button>Save Product</button>
      
    </form>
  );
}
