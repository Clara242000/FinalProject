
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../../App";


export default function Login(){
 
    const navigate = useNavigate();
    const { setToken } = useContext(TokenContext);
    
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
        localStorage.setItem('accessToken', body.accessToken);
        setToken(body.accessToken);
        navigate('/products');
       
        } 

    return(
    <form onSubmit={login}>

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