import './Home.css';

import sexsonart from '../../images/sexson-art-bg.png'
import smallIntro from '../../images/spic6.jpg'


export default function Home() {
    return (
        <main className=''>
            <div id='upper-container' className=''>
                <h1 id='title' className=''>
                    Sara Sexson Art
                </h1>
                
                <hr></hr>
            </div>
                

            <div id='main-container' className="">
                <img
                    className=''
                    id='sexsonart' src={sexsonart} alt="Sara Sexson Art" />
            </div>

            <div id='intro-container-small' className=''>
                <img id='small-intro' src={smallIntro} alt="Sara Sexson Art" />
                <div id='introduction'>
                    <p>
                    I'm Sara Sexson, a watercolor artist based in Prescott, Arizona. I began regularly painting with watercolors in 2019 after initially studying oil painting during my younger years. Drawing inspiration from nature, my work primarily revolves around painting landscapes. 
                    </p>
                    
                    <p>
                    My main focus lies in utilizing color to delve into the ever-shifting light and shadows found within landscapes.
                    </p>
                </div>
            </div>
        </main>
    )
}