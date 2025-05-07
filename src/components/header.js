import './header.css';
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUsers, FaTv, FaCalendarAlt, FaStore } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <h2 className='logo'>Anime SA</h2>

      <nav className={`nav-bar ${menuOpen ? 'active' : ''}`}>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='/'>
              <span className='mobile-icon'><FaHome /></span> Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/community'>
              <span className='mobile-icon'><FaUsers /></span> Community
            </a>
          </li>
          <li className='nav-item'>
            <a href='/anime'>
              <span className='mobile-icon'><FaTv /></span> Anime
            </a>
          </li>
          <li className='nav-item'>
            <a href='/events'>
              <span className='mobile-icon'><FaCalendarAlt /></span> Events
            </a>
          </li>
          <li className='nav-item'>
            <a href='/shop'>
              <span className='mobile-icon'><FaStore /></span> Shop
            </a>
          </li>
        </ul>
        <div className='mobile-buttons'>
          <button className='login-button'>Login</button>
          <button className='signup-button'>Sign Up</button>
        </div>
      </nav>

      <div className='header-buttons desktop-only'>
        <button className='login-button'>Login</button>
        <button className='signup-button'>Sign Up</button>
      </div>

      <div className='burger' onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;
