
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import spic1 from '../../images/spic1.jpg';
import spic2 from '../../images/spic2.jpg';
import spic3 from '../../images/spic3.jpg'




export default function myCarousel() {
  return (
    
    <div className='col-sm-12 mx-auto'>
      <Carousel className='carousel text-center'>
        <Carousel.Item interval={5000}>
          <Link to=''>
          <img
            className="rounded"
            src={spic1}
            alt="First slide"
          ></img>
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <a href='https://the-only-devs.herokuapp.com/' target='_blank'>
            <img
              className="mt-3 mb-5 rounded"
              src={spic2}
              alt="Second slide"
            />
          </a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
   
  )
}