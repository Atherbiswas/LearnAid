import logo from '../../favicon.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
        
function Header() {
    return (
            <Navbar bg="info" expand="lg" className=''>
              <Container>
              {/* <img src={logo} className='nav-img' alt="" /> */}
                <Navbar.Brand to="/" className='fs-4 fw-bold full-title'> <img src={logo} className='nav-img' alt="" /> <span className='fs-2 title-word'>L</span>-earnAid</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto fs-5 link-style">
                    <NavLink  to='/'>Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/about">About</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
        
 export default Header;