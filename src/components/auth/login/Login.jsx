
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IdContext, TokenContext } from "../../../App";


export default function Login(){
 
    const navigate = useNavigate();
    const { setToken } = useContext(TokenContext);
    const { setId } = useContext(IdContext);
    
   async function login(event){
        event.preventDefault();

        const formElement = event.target;
        const { email,  password} = formElement;

        const user = {
            email: email.value, 
            password: password.value,
        };

       const response = await fetch('http://localhost:3000/login' , {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
       
        const body = await response.json();
        console.log(body.user.id);
        localStorage.setItem('accessToken', body.accessToken); 
        localStorage.setItem('user' , body.user.id )
        setToken(body.accessToken);
        setId(body.user.id);
        navigate('/products');
       
        } 

    return(
    <form onSubmit={login}>
            <h1>Log in</h1>
            <fieldset>
                <label htmlFor="email">Email : </label>
                <div>
                <input type="email" id="email" name="email"/>
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="password">Password :</label>
                <div>
                <input type="password" id="password" name="password"/>
                </div>
            </fieldset>

            <button>Login</button>

        </form>
    );
}