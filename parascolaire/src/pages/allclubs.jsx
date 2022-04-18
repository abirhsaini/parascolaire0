import React from 'react';
import Navbawr from '../coponenets/Navbar';
import "../style/Allclucb.css"
import Cart from "../coponenets/cart"
import DinnerList from "../data";
import logo from "../images/logo2.png"
import logo3 from "../images/hh.jpeg"

const Allclubs = () => {
    const cards = DinnerList.map((item) => {
        return (
    <Cart 
 
    image={item.image}
    name={item.name}
    
    
/>
)
})

    return (
        <div>
            <Navbawr />
            <body className='allclub'>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a  class="nav-link active" className='color' href="/home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" className='color' href="/allclubs" id='active'>ALL CLUBS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" className='color' href="schedule">SCHEDULE</a>
                    </li>
                </ul>
                <div className='all'>
                    <div className='inline'>
                        <hr className='hr1' />
                    <span className='tout'> <span className='blue1'>c</span>lubs</span>
                     <hr  className='hr2'/>
                     
                    </div>
                    {cards}
                    
                </div>
                <div className="footer">
                    <img className='last' src={logo} alt="" />
                    <img className='last' src={logo3} alt="" />
                </div>
            </body>
        </div>
    );
};

export default Allclubs;