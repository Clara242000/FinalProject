import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Produse</Link></li>
          <li><Link to="/whatsnew">What`s New</Link></li>
          <li><Link to="/create-product">Create Product</Link></li>
          {/* <li><Link to="/edit-product">Edit Product</Link></li> */}
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/register">Register</Link></li>
          {/* <li><Link to="/edityourprofile">Edit Your Profile</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </nav>
      <br /> <br />
      <h1>Ballet Shop</h1>
    </header>
  );
};

export default Navbar;


