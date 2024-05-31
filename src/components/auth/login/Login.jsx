import { useNavigate } from "react-router-dom";

export default function Login(){
 
    const navigate = useNavigate();

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
        localStorage.setItem('accessToken', JSON.stringify(body.accessToken));
        navigate('/products');
       
        } 

    return(
    <form onSubmit={login}>

            <fieldset>
                <label htmlFor="email">Email: </label>
                <div>
                <input type="email" id="email" name="email"/>
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="password">Password:</label>
                <div>
                <input type="password" id="password" name="password"/>
                </div>
            </fieldset>

            <button>Login</button>

        </form>
    );
}