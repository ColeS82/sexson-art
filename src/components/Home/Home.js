import Navbar from '../Navbar/Navbar';
import './Home.css';

import sexsonart from '../../images/sexson-art-bg.png'
import smallIntro from '../../images/spic6.jpg'



export default function Home() {
    return (
        <main className=''>
            <div id='container' className='pt-5'>
                <h1 id='title' className=' text-center mt-5'>
                    Sara Sexson Art
                </h1>

                <hr></hr>
            </div>

            <div id='intro-container' className="">
                <img
                    className=''
                    id='sexsonart' src={sexsonart} alt="Sara Sexson Art" />
            </div>

            <div id='intro-container-small' className=''>
                <img id='small-intro' src={smallIntro} alt="Sara Sexson Art" />
            </div>
        </main>
    )
}