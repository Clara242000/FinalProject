import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { TokenContext } from '../App';

const Navbar = () => {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('accessToken');
    setToken(null);
    navigate('/login');
  }

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Produse</Link></li>
          <li><Link to="/whatsnew">What`s New</Link></li>
          <li><Link to="/create-product">Create Product</Link></li>
          {/* <li><Link to="/edit-product">Edit Product</Link></li> */}
          {
            !token && (
              <>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )
          }
          {
            token && <li onClick={logout}>Log out</li>
          }
          {/* <li><Link to="/edityourprofile">Edit Your Profile</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </nav>
      {/* <br /> <br /> */}
      {/* <h1>Ballet Shop</h1> */}
    </header>
  );
};

export default Navbar;


