import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import { FaStar } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

function About() {
  return (
    <Container fluid className='pt-5 pb-5'>
    <Container>
      <Row>
        <Col lg={5} className="mb-5 mb-lg-0 position-relative h-100 " style={{minHeight:"500px"}}>
            <img
             className="position-absolute h-100 w-100 pb-5 ps-0 pe-5"
             src="../img/about.jpg"
             alt="col" 
            />
        </Col>
        <Col lg={7}>
          <h5 className='text-primary text-uppercase ps-3'>about us</h5>
          <h1 className='display-5 ps-3'>We Offers Quality Systems & Services</h1>
          <p className='ps-3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. 
          Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. 
          Sanctus clita duo justo et tempor eirmod magna dolore erat amet et magna</p>
          <Row>
            <Col sm={6} className='ps-3 pt-3'>
              <div className='bg-primary cord pt-3'><FaStar className='iconn'/>
              <h4 className='text-center text-white pt-3'>15 Years Experience</h4>
              </div>
            </Col>
            <Col sm={6}  className='ps-3 pt-3'>
              <div className='bg-danger cord pt-3'>
              <FaAward className='iconn'/>
              <h4 className='text-center text-white pt-3'>Award Winning</h4>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </Container>

  );
}

export default About;