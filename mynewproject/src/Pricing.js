import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

function Pricing() {
  return (
    <Container fluid className='py-5'>
        <Container>
            <h5 className='text-center text-primary'>PRICING PLAN</h5>
            <h1 className='text-center display-5 fntweight'>Pricing Plan For CCTV Security Services</h1>
        <Row>
        <Col lg="4" className='pt-5'>
            <div className='position-relative border border-primary rounded'>
                <div className='bg-primary text-center text-white pt-5 pb-4'>
                    <h3>Basic Plan</h3>
                    <h1>$ 49/mo</h1>
                </div>
                <div className='text-center py-5'>
                    <p className='border-bottom border-light mb-2 pb-2'> HTML5 $ CSS3</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Bootstrap v5</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Responsive Layout</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Browsers Compatibility</p>
                    <p className='border-bottom border-light mb-2 pb-5'>Easy to use</p>
                    <Button>Order Now</Button>
                </div>
            </div>
        </Col>
        <Col lg="4" className='pt-5'>
        <div className='position-relative border border-danger rounded'>
                <div className='bg-danger text-center text-white pt-5 pb-4'>
                    <h3>Standard Plan</h3>
                    <h1>$ 49/mo</h1>
                </div>
                <div className='text-center py-5'>
                    <p className='border-bottom border-light mb-2 pb-2'> HTML5 $ CSS3</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Bootstrap v5</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Responsive Layout</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Browsers Compatibility</p>
                    <p className='border-bottom border-light mb-2 pb-5'>Easy to use</p>
                    <Button className='btn-danger'>Order Now</Button>
                </div>
            </div>
        </Col>
        <Col lg="4" className='pt-5'>
        <div className='position-relative border border-primary rounded'>
                <div className='bg-primary text-center text-white pt-5 pb-4'>
                    <h3>Extended Plan</h3>
                    <h1>$ 49/mo</h1>
                </div>
                <div className='text-center py-5'>
                    <p className='border-bottom border-light mb-2 pb-2'> HTML5 $ CSS3</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Bootstrap v5</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Responsive Layout</p>
                    <p className='border-bottom border-light mb-2 pb-2'>Browsers Compatibility</p>
                    <p className='border-bottom border-light mb-2 pb-5'>Easy to use</p>
                    <Button>Order Now</Button>
                </div>
            </div>
        </Col>
        </Row>
        </Container>
    </Container>
  );
}

export default Pricing;