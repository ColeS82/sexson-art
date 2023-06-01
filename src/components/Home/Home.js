import Navbar from '../Navbar/Navbar';
import './Home.css';
import spic1 from '../../images/spic1.jpg';
import spic2 from '../../images/spic2.jpg';
import spic3 from '../../images/spic3.jpg';
import spic5 from '../../images/spic5.jpg';
// import MyCarousel from './MyCarousel';

export default function Home() {
    return (
        <main className=''>
           
            <div id='container' className='pt-5'>
                <h1 id='title' className=' text-center mt-5'>
                    Sara Sexson Art
                </h1>

                <h3 id='intro' className=' text-center'>
                    Hello!!
                </h3>

                <hr></hr>
            </div>

            <div className=' row mt-sm-5 px-2'>
                <div className='d-flex col-sm my-4'>
                    <img src={spic1} alt='spic1' className='rounded mx-auto d-block align-self-center' style={{ width: "70%" }} />
                </div>

                <div className='d-flex col-sm my-4'>
                    <img src={spic2} alt='spic1' className='rounded mx-auto  d-block align-self-center' style={{ width: "100%" }} />
                </div>

                <div className='col-sm d-flex my-4'>
                    <img src={spic3} alt='spic1' className='rounded mx-auto d-block align-self-center' style={{ width: "70%" }} />
                </div>

                <div className='col-sm d-flex my-4'>
                    <img src={spic5} alt='spic1' className='rounded mx-auto d-block align-self-center' style={{ width: "70%" }} />
                </div>


            </div>
        </main>
    )
}