import {Component} from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaLinkedin} from "react-icons/fa";


class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() { 
        return ( 
            <Navbar expand="lg" variant='dark'>
                
                <Container>
                    <Navbar.Brand className='position-absolute top-50 start-50 translate-middle'>
                        <img src='/images/logo.png' alt='logo'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                    <Nav className="me-auto pe-2">
                        <Nav.Link href="#link">Home</Nav.Link>
                        <Nav.Link href="#link">Product</Nav.Link>
                        <Nav.Link href="#link">Pricing</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Nav.Link className='ms-3'><FaTwitter></FaTwitter></Nav.Link>
                        <Nav.Link className='ms-3'><FaFacebook></FaFacebook></Nav.Link>
                        <Nav.Link className='ms-3'><FaLinkedin></FaLinkedin></Nav.Link>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         );
    }
}
 
export default Navbar1;