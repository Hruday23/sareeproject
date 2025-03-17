

import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import { useAuth } from './AuthContext';  // Import useAuth
import { useCart } from './categorieslist/CartContext';
import "./Nav.css";
import { useAuth } from './categorieslist/AuthContext';

function Navone() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <Navbar className="bg-body-tertiary">
      <Navbar.Brand href="/" className='m-auto'>Brandname</Navbar.Brand>
      <Nav>
        <Link to="/cart"><i className="bi bi-cart"></i> 
        {/* ({cart.length}) */}
        </Link>
        <Link to="/"><i className="bi bi-heart"></i></Link>
        {user ? (
          <>
            <span>{user}</span>
            <button onClick={logout} className="logout-button">Logout</button>
          </>
        ) : (
          <Link to="/login"><i className="bi bi-person"></i></Link>
        )}
      </Nav>
    </Navbar>
  );
}

function Navtwo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="box">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ol className={`menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/silk">Silk</Link>
          <ol>
            <li><Link to="/silk/soft-silk">Soft silk</Link></li>
            <li><Link to="/silk/kanjivaram">Kanjivaram</Link></li>
            <li><Link to="/silk/raw-silk">Raw silk</Link></li>
            <li><Link to="/silk/kalamkari-print">Kalamkari print</Link></li>
            <li><Link to="/silk/mysore-silk">Mysore silk</Link></li>
          </ol>
        </li>
        <li><Link to="/cotton">Cotton</Link>
          <ol>
            <li><Link to="/cotton/khadi">Khadi</Link></li>
            <li><Link to="/cotton/bengali">Bengali</Link></li>
            <li><Link to="/cotton/ikkat">Ikkat</Link></li>
            <li><Link to="/cotton/chanderi-sarees">Chanderi sarees</Link></li>
            <li><Link to="/cotton/kalamkari">Kalamkari</Link></li>
            <li><Link to="/cotton/madhubani">Madhubani</Link></li>
          </ol>
        </li>
        <li><Link to="/regional">Regional</Link>
          <ol>
            <li><Link to="/regional/sambalpuri">Sambalpuri</Link></li>
            <li><Link to="/regional/kanjivaram-sarees">Kanjivaram sarees</Link></li>
            <li><Link to="/regional/bengali-sarees">Bengali sarees</Link></li>
            <li><Link to="/regional/mysore-sarees">Mysore sarees</Link></li>
            <li><Link to="/regional/karnataka-sarees">Karnataka Sarees</Link></li>
          </ol>
        </li>
        <li><Link to="/salwar">Salwar Kameez</Link>
          <ol>
            <li><Link to="/salwar/sangeet-salwar">Sangeet Salwar</Link></li>
            <li><Link to="/salwar/festive-salwar">Festive Salwar</Link></li>
            <li><Link to="/salwar/mehindi-salwar">Mehindi salwar</Link></li>
          </ol>
        </li>
        <li><Link to="/lehenga">Lehenga</Link>
          <ol>
            <li><Link to="/lehenga/wedding">Wedding lehenga</Link></li>
            <li><Link to="/lehenga/reception">Reception lehenga</Link></li>
            <li><Link to="/lehenga/partyware">Partyware lehenga</Link></li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

function ImpNav() {
  return (
    <div>
      <Navone />
      <Navtwo />
    </div>
  );
}

export default ImpNav;
