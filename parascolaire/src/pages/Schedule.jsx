import React from 'react';
import Navbawr from '../coponenets/Navbar';
import "../style/schedule.css"
import logo from "../images/l.PNG"
import logo2 from "../images/logo2.png"
import logo3 from "../images/hh.jpeg"

const Schedule = () => {
    return (
        <div>
             <Navbawr />
            <body className='allclub'>
            <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a  class="nav-link active" className='color' href="/home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" className='color' href="/allclubs" >ALL CLUBS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" className='color' href="schedul2" id='active'>SCHEDULE</a>
                    </li>
                </ul>
                <div className='all'>
                    <div className='inline'>
                        <hr className='hr1' />
                    <span className='tout'> Sch<span className='blue1' id='blu2'>edule</span></span>
                     <hr  className='hr2'/>
                  
                    </div>
                    <img className="ima" src={logo} alt="" />
                    <div className='toutall'> 
                    <div className='eng'>
                        <div className='colororange'>cas</div>
                        <p className='para'> Scéance cellule Formation </p>
                    </div>
                    <div className='eng'>
                        <div className='colorblue'>cit</div>
                        <p className='para'>  Fete Karoke /soirée Traditionnelle </p>
                    </div>
                    <div className='eng'>
                        <div className='colorred' >arty</div>
                        <p className='para'>  Evenement Netware et South Digital </p>
                    </div>
                    <div className='eng'>
                        <div className='colorgreen'>DJF</div>
                        <p className='para'> Collecte / Préparation au convoi May 2022 </p>
                    </div>
                    </div>  
                </div>
                <div className="footer">
                    <img className='last' src={logo2} alt="" />
                    <img className='last' src={logo3} alt="" />
                </div>
                </body>
                
        </div>
    );
};

export default Schedule;