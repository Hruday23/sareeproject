

import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";
import "./Nav.css";

function Navone() {
  return (
    <Navbar className="bg-body-tertiary">
      <Navbar.Brand href="/" className='m-auto'>Brandname</Navbar.Brand>
      <Nav>
      <Link to="/"><i className="bi bi-cart"></i></Link>
      <Link to="/"><i className="bi bi-heart"></i></Link>
      <Link to="/"><i className="bi bi-person"></i></Link>
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
            <li><Link to="/silk">Soft silk</Link></li>
            <li><Link to="/silk">Kanjivaram</Link></li>
            <li><Link to="/silk">Raw silk</Link></li>
            <li><Link to="/silk">Kalamkari print</Link></li>
            <li><Link to="/silk">Mysore silk</Link></li>
          </ol>
        </li>
        <li><Link to="/cotton">Cotton</Link>
          <ol>
            <li><Link to="/cotton">Khadi</Link></li>
            <li><Link to="/cotton">Bengali</Link></li>
            <li><Link to="/cotton">Ikkat</Link></li>
            <li><Link to="/cotton">Chanderi sarees</Link></li>
            <li><Link to="/cotton">Kalamkari</Link></li>
            <li><Link to="/cotton">Madhubani</Link></li>
          </ol>
        </li>
        <li><Link to="/regional">Regional</Link>
          <ol>
            <li><Link to="/regional">Sambalpuri</Link></li>
            <li><Link to="/regional">Kanjivaram sarees</Link></li>
            <li><Link to="/regional">Bengali sarees</Link></li>
            <li><Link to="/regional">Mysore sarees</Link></li>
            <li><Link to="/regional">Karnataka Sarees</Link></li>
          </ol>
        </li>
        <li><Link to="/salwar">Salwar Kameez</Link>
          <ol>
            <li><Link to="/salwar-kameez">Sangeet Salwar</Link></li>
            <li><Link to="/salwar-kameez">Festive Salwar</Link></li>
            <li><Link to="/salwar-kameez">Mehindi salwar</Link></li>
          </ol>
        </li>
        <li><Link to="/lehenga">Lehenga</Link>
          <ol>
            <li><Link to="/lehenga">Wedding lehenga</Link></li>
            <li><Link to="/lehenga">Reception lehenga</Link></li>
            <li><Link to="/lehenga">Partyware lehenga</Link></li>
            <li><Link to="/lehenga/"></Link></li>
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
