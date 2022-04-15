import React from 'react';
import Navbawr from '../coponenets/Navbar';
import "../style/Allclucb.css"

const Allclubs = () => {
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

            </body>
        </div>
    );
};

export default Allclubs;