import React from 'react';
import Navbawr from '../coponenets/Navbar';
import "../style/Allclucb.css"
import Cart from "../coponenets/cart"
import DinnerList from "../data";

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
                        <a class="nav-link active" className='color' href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" className='color' href="#" id='active'>ALL CLUBS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" className='color' href="#">SCHEDULE</a>
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
            </body>
        </div>
    );
};

export default Allclubs;