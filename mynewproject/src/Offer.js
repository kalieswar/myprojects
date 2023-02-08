import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

function Offer() {
  return (
    <Container fluid className='bg-offer my-5 py-5'>
        <Container className='py-5'>
            <Row className='justify-content-center'>
                <Col lg="7" className='text-center'>
                    <div className='mx-auto mb-4'>
                        <h5 className='text-white text-uppercase'>special offer</h5>
                        <h1 className='display-5 text-white fntweight'>Save 50% On All Items Your First Order</h1>
                    </div>
                    <p className='text-white mb-4'>
                    Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.
                    </p>
                    <Button className='py-md-3 px-md-5 me-3'>Order Now</Button>
                    <Button className='btn-danger py-md-3 px-md-5'>Read More</Button>
                </Col>
            </Row>
        </Container>    
    </Container>
  );
}

export default Offer;