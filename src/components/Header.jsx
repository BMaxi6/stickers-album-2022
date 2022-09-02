import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

export const Header = () => {

    const [username, setUsername] = useState('Maximiliano');

  return (
        <Navbar className="header" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="brand">Sticker Qatar - {username}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="header-link">Todas</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="obtained" className="header-link">Obtenidas</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="missing" className="header-link">Faltantes</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}