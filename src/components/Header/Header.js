import logo from '../../favicon.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
        
function Header() {
    return (
            <Navbar bg="info" expand="lg">
              <Container>
              {/* <img src={logo} className='nav-img' alt="" /> */}
                <Navbar.Brand to="/" className='fs-4 fw-bold'> <img src={logo} className='nav-img' alt="" /> <span className='fs-2 title-word'>L</span>-earnAid</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto fs-5 link-style">
                    <Link to='/'>Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About</Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
        
 export default Header;