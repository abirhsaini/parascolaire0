import React from 'react'; import Navbawr from '../coponenets/Navbar';
import "../style/description.css"
import image1 from "../images/ho.PNG"
import image2 from "../images/DJF.jpeg"
import logo from "../images/logo2.png"
import logo3 from "../images/hh.jpeg"
import img1 from "../images/lp.jpeg"
import logo2 from "../images/Capture.PNG"
import logo0 from "../images/sidebar-icon-16.jpg"
import logo1 from "../images/noti.png"
import {
    Navbar,
    Container,
    
  } from 'react-bootstrap';



const description = () => {
    return (
        <div>
               
    <Navbar className='hi'  >
  <Container>
    <Navbar.Brand href="#home"><img  className='nav' src={logo0} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-center"> <img className="ca" src={image2} alt="" /></Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end"><Navbar.Text><img className='img1' src={logo1} alt="" /></Navbar.Text>
      <Navbar.Text>
         <img className='img1' src={logo2} alt="" />
         
      </Navbar.Text>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
            <body className='allclub' id='description'>
                <div className='navb'>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" className='color' id='active' href="/home">DESCRIPTION</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" className='color' href="/allclubs" >EVENTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" className='color' href="schedule" >MEMBERS</a>
                        </li>
                    </ul>
                </div>
                <div  >
                    <img className='djf' src={image1} alt="" />
                </div>
                <div class="card">
                    <div class="row">
                        <div class="col-sm-5">
                            <img class="d-block " className='card2' src={image2} alt="" />

                        </div>
                        <div class="col-sm-7">
                            <div class="card-block">
                                <h4 class="card-title">Dijital Job Fair</h4>

                                <p className='black'>Date de Création:   <span className='gre' >12/07/2009</span>  Créer par: <span className='gre'>Fatima Taoufik </span> <br /> Contact: <span className='gre' >0698925270</span >  Président: <span className='gre'>Achraf Benomar</span>  <br />Bureau: <span className='gre'>9 Personnes</span>   </p>



                                </div>

                                </div>

                                </div> <div id="blackk">
                                <p className='black' >En France, la série est diffusée depuis le 3 octobre 2011 sur MTV2 et depuis le 30 juin 2012 sur France 43, au Québec, depuis le 15 février 2012 sur VRAK4 et en Belgique, depuis le 14 septembre 2012 sur Plug RTL5.
En septembre 2021, Jeff Davis annonce la production d'une suite sous format d'un long métrage intitulé Teen Wolf, The Movie pour une sortie en 2022 sur la plateforme Paramount+6.</p>
                            </div>
                            </div>
                            <div class="card">
                    <div class="row">
                        <div class="col-sm-5">
                            <img class="d-block " className='card3' src={img1} alt="" />

                        </div>
                        <div class="col-sm-7">
                            <div class="card-block">
                                <h4 class="card-title">mot du presidant</h4>

                                <p className='black'>Nom complet   <span className='gre' >Achraf Benomar</span> age de: <span className='gre'>21 ans </span> <br />  <span className='gre' >Etudiante en 2éme année Filière Smart Ict</span>   </p>



                                </div>

                                </div>

                                </div> <div id="blackk">
                                <p className='black' >En France, la série est diffusée depuis le 3 octobre 2011 sur MTV2 et depuis le 30 juin 2012 sur France 43, au Québec, depuis le 15 février 2012 sur VRAK4 et en Belgique, depuis le 14 septembre 2012 sur Plug RTL5.
En septembre 2021,*een Wolf, The Movie pour une sortie en 2022 sur la plateforme Paramount+6.</p>
                            </div>
                            
                            </div>
                            <a href="#"><button  className='input'>LOGIN</button></a>
                            <div className="footer">
                    <img className='last' src={logo} alt="" />
                    <img className='last' src={logo3} alt="" />
                </div>
                           
                       
               

            </body>
        </div>
    );
};

export default description;