import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiCctv } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import {GiWifiRouter} from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { MdMonitor } from "react-icons/md";
import { BiServer } from "react-icons/bi";

function Services() {
  return (
    <Container fluid className='pb-5'>
        <Container>
            <h5 className='mx-auto text-center text-primary text-uppercase' style={{letterSpacing:"5py"}}>Services</h5>
            <h1 className='display-5 text-center fntweight'>Our Excellent CCTV Security Services</h1>
        </Container>

        <Row className='g-4 px-5'>
            <Col lg={4} md={6} className="bg-lightt py-5">
                <BiCctv className='cctvicon'/>
                <h5 className='text-primary'>CCTV</h5>
                <h3 className='mb-3'>Installation</h3>
                <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                <a href='.' className='services-atag '>Read More <BiRightArrowAlt/></a>
            </Col>
            <Col lg={4} md={6} className="bg-lightt py-5">
            <GiWifiRouter className='cctvicon'/>
            <h5 className='text-primary'>CCTV</h5>
            <h3 className='mb-3'>Configuration</h3>
            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
            <a href='.' className='services-atag '>Read More <BiRightArrowAlt/></a>
            </Col>
            <Col lg={4} md={6} className="bg-lightt py-5">
            <BiCctv className='cctvicon'/>
            <h5 className='text-primary'>CCTV</h5>
            <h3 className='mb-3'>Maintainance</h3>
            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
            <a href='.' className='services-atag '>Read More <BiRightArrowAlt/></a>
            </Col>
            <Col lg={4} md={6} className="bg-lightt py-5">
            <MdHomeRepairService className='cctvicon'/>
            <h5 className='text-primary'>CCTV</h5>
            <h3 className='mb-3'>Repair & Service</h3>
            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
            <a href='.' className='services-atag '>Read More <BiRightArrowAlt/></a>
            </Col>
            <Col lg={4} md={6} className="bg-lightt py-5">
            <MdMonitor className='cctvicon'/>
            <h5 className='text-primary'>CCTV</h5>
            <h3 className='mb-3'>Monitoring</h3>
            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
            <a href='.' className='services-atag '>Read More <BiRightArrowAlt/></a>
            </Col>
            <Col lg={4} md={6} className="bg-lightt py-5">
            <BiServer className='cctvicon'/>
            <h5 className='text-primary'>CCTV</h5>
            <h3 className='mb-3'>Access Control</h3>
            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
            <a href='.' className='services-atag '>Read More <BiRightArrowAlt/></a>
            </Col>
        </Row>
        </Container>
  );
}

export default Services;