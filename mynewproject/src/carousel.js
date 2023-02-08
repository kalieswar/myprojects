import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/carousel-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>BEST SECURITY SERVICES</h3>
          <p className='display-6 fw-bold'>Safe & Secure Home For Your Family</p>
          <Button variant='primary' className='py-md-3 px-md-5 me-3'>Get Quote</Button>
          <Button variant='danger' className='py-md-3 px-md-5 me-3'>Contact Us</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/carousel-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>BEST SECURITY SERVICES</h3>
          <p className='display-6 fw-bold'>Safe & Secure Home For Your Family</p>
          <Button variant='primary' className='py-md-3 px-md-5 me-3'>Get Quote</Button>
          <Button variant='danger' className='py-md-3 px-md-5 me-3'>Contact Us</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/carousel-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>BEST SECURITY SERVICES</h3>
          <p className='display-6 fw-bold'>
          Safe & Secure Home For Your Family
          </p>
          <Button variant='primary' className='py-md-3 px-md-5 me-3'>Get Quote</Button>
          <Button variant='danger' className='py-md-3 px-md-5 me-3'>Contact Us</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;