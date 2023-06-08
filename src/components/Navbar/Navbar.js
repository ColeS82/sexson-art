import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const location = useLocation();

    return (

        <nav id='navbar' className='navbar navbar-expand-sm text-dark mt-3'>
            <div className='container-fluid'>
                <button id='menu-btn' className="navbar-toggler bg-muted" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="collapsibleNavbar" className='container-fluid justify-content-sm-center collapse navbar-collapse'>
                    <ul className='navbar-nav col-8 justify-content-around'>
                        {/* conditionally renders the 'Home' nav-link when not on the 'Home' page. */}
                        {location.pathname !== '/' && (
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                            Home
                            </Link>
                        </li>
                        )}


                        <li className='nav-item'>
                            <button className='nav-link btn'>
                                About Me
                            </button>
                        </li>

                        <li className='nav-item'>
                            <button className='nav-link  btn'>
                                Contact Me
                            </button>
                        </li>

{/* conditionally renders the 'My Works' nav-link when not on the 'My Work' page. */}
                        {location.pathname !== '/myworks' && (
                        <li className='nav-item'>
                            <Link to='myworks' className='nav-link'>
                            My Works
                            </Link>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    )
}