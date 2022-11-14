import {Component} from 'react';
import {Container} from 'react-bootstrap';
import {RiMapPinLine} from "react-icons/ri";
import {MdPhoneAndroid} from "react-icons/md";
import { FaTwitter, FaFacebook, FaLinkedin} from "react-icons/fa";


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div className='container-fluid footer'>
                <Container>
                    <Container className='row'>
                        <Container className='col-xs-12 col-sm-6 col-lg-3'>
                            <h3>Pages</h3>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Home</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Product</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Pricing</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>About</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Contact</a>
                            </div>
                        </Container>
                        <Container className='col-xs-12 col-sm-6 col-lg-3'>
                            <h3>Tomothy</h3>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Eleanor Edwards</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Ted Robertson</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Annette Russel</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Jennie Mckinney</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Gloria Richards</a>
                            </div>
                        </Container>
                        <Container className='col-xs-12 col-sm-6 col-lg-3'>
                            <h3>Jane Black</h3>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Philip Jones</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Product</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Collen Russel</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Marvin Hawkins</a>
                            </div>
                            <div class="mb-2">
                                <a href='/' className='card-link'>Bruce Simmmons</a>
                            </div>
                        </Container>
                        <Container className='col-xs-12 col-sm-6 col-lg-3'>
                            <div class="mb-2">
                                <RiMapPinLine size={38} color="white"></RiMapPinLine>
                                <a href='/' className='card-link'>7480 Mockingbird Hill </a>
                            </div>
                            <div class="mb-2">
                                <MdPhoneAndroid size={38} color="white"></MdPhoneAndroid>
                                <a href='/' className='card-link'>(239) 555-0108 </a>
                            </div>
                            <Container className='d-flex justify-content-center mb-5 mt-5'>
                                    <FaTwitter size={33} color="white" className='ms-2 me-4'></FaTwitter>
                                    <FaFacebook size={33} color="white"className='me-4'></FaFacebook>
                                    <FaLinkedin size={33} color="white"className='me-4'></FaLinkedin>
                            </Container>
                        </Container>




                    </Container>
                </Container>

            </div>

        );
    }
}
 
export default Footer;