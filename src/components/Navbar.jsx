
import { useContext, useState } from 'react';
import { IdContext, TokenContext } from '../App';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { token, setToken } = useContext(TokenContext);
  const { id } = useContext(IdContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function logout() {
    localStorage.removeItem('accessToken');
    setToken(null);
    navigate('/login');
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="navbar__header">
      <div className="navbar__container">
    
        
        <button className="navbar__toggle-button" onClick={toggleMenu}>
          ☰
        </button>
       
        <nav className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
          <button className="navbar__close-button" onClick={toggleMenu}>✖</button>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
            <li><Link to="/whatsnew" onClick={toggleMenu}>What`s New</Link></li>
            <li><Link to="/create-product" onClick={toggleMenu}>Wish Products</Link></li>
            {token ? (
              <>
                <li><Link to={`/edit-profile/${id}`} onClick={toggleMenu}>Edit Profile</Link></li>
                <li onClick={() => { logout(); toggleMenu(); }}>Log out</li>
              </>
            ) : (
              <>
                <li><Link to="/login" onClick={toggleMenu}>Log in</Link></li>
                <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
              </>
            )}
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
     </header> 
  );
};

export default Navbar;




