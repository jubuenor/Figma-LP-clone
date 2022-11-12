import {Component} from 'react';
import {Container} from 'react-bootstrap';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <Container className='features'>
                <Container className='d-flex flex-column align-items-center'>
                    <h2>Features</h2>
                    <h4 className='mt-4 mb-4'>Most calendars are designed for teams.<span> Slate is designed for freelancers</span></h4>
                </Container>
                <Container className='row text-center mt-5'>
                    <Container className='col-xs-12 col-sm-6 col-lg-4'>
                        <Container className='p-5'>
                            <img src='/images/features/features1.png' alt='features1'></img>
                        </Container>
                        <Container className='d-flex flex-column align-items-center'>
                            <h3>OpenType features Variable fonts</h3>
                            <p className='mt-4 mb-4'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                        </Container>
                    </Container>
                    <Container className='col-xs-12 col-sm-6 col-lg-4'>
                        <Container className='p-5'>
                            <img src='/images/features/features2.png' alt='features2'></img>
                        </Container>
                        <Container className='d-flex flex-column align-items-center'>
                            <h3>Design with real data</h3>
                            <p className='mt-4 mb-4'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                        </Container>
                    </Container>
                    <Container className='col-xs-12 col-sm-6 col-lg-4'>
                        <Container className='p-5'>
                            <img src='/images/features/features3.png' alt='features3'></img>
                        </Container>
                        <Container className='d-flex flex-column align-items-center'>
                            <h3>Fastest way to take action</h3> 
                            <p className='mt-4 mb-4'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                        </Container>
                    </Container>
                </Container>
                <Container className='d-flex flex-column align-items-center mt-4 mb-5'>
                        <video controls>
                            <source src='/videos/figma.mp4' type="video/mp4"></source>
                        </video>

                    </Container>
            </Container>
         );
    }
}
 
export default Features;