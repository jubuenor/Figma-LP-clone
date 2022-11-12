import {Component} from 'react'
import {Container,Button} from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() { 
        return ( 
            <div className="d-flex justify-content-center flex-column main">
                <Container className="d-flex justify-content-center mb-4">

                    <h1>The best products start with Figma</h1>

                </Container>
                <Container className="d-flex justify-content-center mb-4">

                    <h4>Most calendars are designed for teams. <span>Slate is designed for freelancers</span></h4>

                </Container>
                <Container className="d-flex justify-content-center mb-4">
                    <Button className='rounded-pill'>Try For Free</Button>
                </Container>

                

            </div>
        );
    }
}
 
export default Main;