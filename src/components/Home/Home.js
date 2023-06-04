import Navbar from '../Navbar/Navbar';
import './Home.css';

import sexsonart from '../../images/sexson-art-bg.png'



export default function Home() {
    return (
        <main className=''>
            <div id='container' className='pt-5'>
                <h1 id='title' className=' text-center mt-5'>
                    Sara Sexson Art
                </h1>

                <h3 id='intro' className=' text-center'>
                    Hello!!
                <hr></hr>
                </h3>

            </div>

            <div className="">
                
                <div id='intro-bg' className="d-flex">
                    <img 
                    className=''
                    id='sexsonart' src={sexsonart} alt="Sara Sexson Art"/>
                    
                </div>
            </div>



        </main>
    )
}