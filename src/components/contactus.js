import {Component} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {RiMapPinLine} from "react-icons/ri";
import {MdPhoneAndroid} from "react-icons/md"
import {AiOutlineMail} from 'react-icons/ai'
import { FaTwitter, FaFacebook, FaLinkedin} from "react-icons/fa";


class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <Container className='contactus'>
                <Container className='d-flex flex-column align-items-center mb-5'>
                    <h2>Contact Us</h2>
                    <h4 className='mt-4 mb-4'>Most calendars are designed for teams.<span> Slate is designed for freelancers</span></h4>
                </Container>
                <Container className='row'>
                    <Container className='col-xs-12 col-sm-12 col-lg-5 shadow-lg rounded-4 mb-5'>
                        <h3 className='text-center mt-5'>Contact Us</h3>
                        <Form className='p-5'>
                            <Form.Group className='mb-5'>
                                <Form.Control type='text' placeholder='You Name' className='rounded-3'></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-5'>
                                <Form.Control type='email' placeholder='You Email'></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-5'>
                                <Form.Control as='textarea' placeholder='You Message' rows={6}></Form.Control>
                            </Form.Group>
                            <Button type="submit" className='ps-4 pe-4 pt-2 pb-2 rounded-4'>Send</Button>
                        </Form>
                    </Container>
                    <Container className='col-xs-12 col-sm-12 col-lg-7'>
                        <Container className='d-flex mb-5 info'>
                            <Container className='d-flex align-items-center mb-3'>
                                <RiMapPinLine size={32} color="dodgerblue"></RiMapPinLine>
                                <h5 className='mt-3'>6386 Spring St Anchorage, Georgia 12473 United States</h5>
                            </Container>
                            <Container className='d-flex align-items-center mb-3'>
                                <MdPhoneAndroid size={32} color="dodgerblue"></MdPhoneAndroid>
                                <h5 className='mt-3'>(843) 555-0130</h5>
                            </Container>
                            <Container className='d-flex align-items-center mb-3'>
                                <AiOutlineMail size={32} color="dodgerblue"></AiOutlineMail>
                                <h5 className='mt-3'>willie.jennings@example.com</h5>
                            </Container>
                        </Container>
                        <Container className='d-flex flex-column align-items-center'>
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4209.5955728217605!2d-122.41834970629218!3d37.77519236084654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1ses-419!2sco!4v1668357852578!5m2!1ses-419!2sco" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Container>
                        <Container className='d-flex justify-content-center mb-5 mt-5'>
                                <FaTwitter size={33} color="dodgerblue" className='ms-2 me-4'></FaTwitter>
                                <FaFacebook size={33} color="dodgerblue"className='me-4'></FaFacebook>
                                <FaLinkedin size={33} color="dodgerblue"className='me-4'></FaLinkedin>
                        </Container>
                    </Container>
                </Container>
            </Container>

         );
    }
}
 
export default ContactUs;