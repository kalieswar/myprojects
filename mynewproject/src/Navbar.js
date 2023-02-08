import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiPhone } from "react-icons/fi";
import {Link} from "react-router-dom" ;


function TopNavbar() {
  return (
    <Navbar bg="white" expand="lg" className='py-3 py-lg-0 px-0 px-lg-0 navbar-light shadow-sm sticky-top'>
      <Container>
        <Navbar.Brand href="#home"><h1 className='display-5 text-primary fonts'>Safe <span className='text-danger'>Cam</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end flex-grow-1' id="basic-navbar-nav">
          <Nav className="me-lg-5">
            <Link to='/' className='fontss'><Nav.Link href='/'>Home</Nav.Link></Link>
            <Link to='/about' className='fontss'><Nav.Link href="/about">About</Nav.Link></Link>
            <Link to='/services' className='fontss'><Nav.Link href="/services" >Service</Nav.Link></Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown" >
              <Link to='/pricing'><NavDropdown.Item href="/pricing">Pricing plan</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.2">
                Blog Grid
              </NavDropdown.Item>
              <Link to='/login'><NavDropdown.Item href="/login"> Login Page</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.4">
                The Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Testimonial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='fontss'>Contact</Nav.Link>
            <Nav.Link href="tel:+123456789" className='col-lg-4 nav-item nav-link nav-contact bg-danger text-white '><FiPhone /><i>+123456789</i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;