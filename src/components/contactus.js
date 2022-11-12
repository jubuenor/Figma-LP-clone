import {Component} from 'react';
import {Container} from 'react-bootstrap';


class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <Container className='contactus'>
                <Container className='d-flex flex-column align-items-center'>
                    <h2>Contact Us</h2>
                    <h4 className='mt-4 mb-4'>Most calendars are designed for teams.<span> Slate is designed for freelancers</span></h4>
                </Container>


            </Container>

         );
    }
}
 
export default ContactUs;