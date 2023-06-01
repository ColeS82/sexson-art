import spic1 from '../../images/spic1.jpg';
import spic2 from '../../images/spic2.jpg';
import spic3 from '../../images/spic3.jpg';
import spic5 from '../../images/spic5.jpg';

export default function MyWorks() {

    return (
        <div className='bg-light'>
            <div id='container' className='pt-5 mt-5'>

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
        </div>
    )
}
