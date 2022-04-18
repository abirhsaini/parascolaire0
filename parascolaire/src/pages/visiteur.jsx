import React from 'react';
import logo2 from "../images/Capture.PNG"
import logo0 from "../images/sidebar-icon-16.jpg"
import logo1 from "../images/noti.png"

import {
    Navbar,
    Container,

} from 'react-bootstrap';
import "../style/home.css"
import logo from "../images/logo2.png"
import logo3 from "../images/hh.jpeg"
import image3 from "../images/plus.png"
import image4 from "../images/DJF.jpeg"
import image5 from "../images/CAS.jpeg"
import image6 from "../images/ARTY.jpeg"
import img1 from "../images/casa.jpeg"
import img2 from "../images/djfa.jpeg"
import img3 from "../images/secu.jpeg"
import img4 from "../images/,.jpeg"



const Visiteur = () => {

    return (
        <div>


            <Navbar className='hi'  >
                <Container>
                    <Navbar.Brand href="#home"><img className='nav' src={logo0} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end"><Navbar.Text> <a href="/login"> <button class="btn btn-light">login</button></a></Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <body className='allclub' >
                <ul class="nav justify-content-center" >
                    <li class="nav-item">
                        <a class="nav-link active" className='color' id='active' href="/home">HOME</a>
                    </li>
                    
                </ul>
                <div className='all'>
                    <div className='inline'>
                        <hr className='hr1' />
                        <span className='tout'> <span className='blue1'>E</span>vent</span>
                        <hr className='hr2' />

                    </div>

                    <div className='heloe'>
                        <div class="container mt-2" >


                            <div class="row">
                                <div class="col-sm-5" >
                                    <div class="card card-block">

                                        <img src={img2} className="li" alt="Photo of sunset" />
                                        <h5 class="card-title mt-3 mb-3">LMPS premier groupe panafricain spécialisé dans les métiers de la CyberSécurité. LMPS Group offre une gamme complète de provices allant de l’audit et le conseil,</h5>
                                        <span className='gre' >Learn more</span>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <div class="card card-block">

                                        <img src={img1} className="li" alt="Photo of sunset" />
                                        <h5 class="card-title  mt-3 mb-3">LMPS premier groupe panafricain spécialisé dans les métiers de la CyberSécurité. LMPS Group offre une gamme complète de provices allant de l’audit et le conseil,</h5>
                                        <span className='gre' >Learn more</span>

                                    </div>


                                </div>
                                <div class="col-sm-2"><img className='card4' src={image3} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className='inline'>
                        <hr className='hr1' />
                        <span className='tout'> <span className='blue1'>C</span>lubs</span>
                        <hr className='hr2' />

                    </div>
                    <div className='card1'>
                        <a href="/description">
                            <div class="" >

                                <img class="card-img-top" className='card2' src={image4} alt="Card image cap" />
                                <div class="card-body" className='cardindo'>
                                    <h5 class="card-title">DJF</h5>

                                </div>
                            </div>

                        </a>
                    </div>
                    <div className='card1'>
                        <a href="/description">
                            <div class="" >

                                <img class="card-img-top" className='card2' src={image5} alt="Card image cap" />
                                <div class="card-body" className='cardindo'>
                                    <h5 class="card-title">CAS</h5>

                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='card1'>
                        <a href="/description">
                            <div class="" >

                                <img class="card-img-top" className='card2' src={image6} alt="Card image cap" />
                                <div class="card-body" className='cardindo'>
                                    <h5 class="card-title">ARTY</h5>

                                </div>
                            </div>

                        </a>
                    </div>


                    <div className='inline'>
                        <hr className='hr1' />
                        <span className='tout'> <span className='blue1'>Most</span>consulted</span>
                        <hr className='hr2' />

                    </div>
                    <div className='heloe'>
                        <div class="container mt-2" >


                            <div class="row">
                                <div class="col-sm-6" >
                                    <div class="card card-block">

                                        <img src={img1} className="li" alt="Photo of sunset" />
                                        <h5 class="card-title mt-3 mb-3">Vous étes invitées a representer le club A2S dans l’evenement South digital things , veuillez comfirmer votre presence.</h5>
                                        <span className='gre' > Veuiller se presenter a l’heure</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card card-block">

                                        <img src={img4} className="li" alt="Photo of sunset" />
                                        <h5 class="card-title  mt-3 mb-3">Vous participez au collecte  le  prochain Mardi le 8 fevrier 2022 .
                                            Ce Collecte aura lieu a rabat hay al irfane Bloc D.
                                        </h5>
                                        <span className='gre' >Veuillez se presenter a l’heure</span>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <img className='last' src={logo} alt="" />
                    <img className='last' src={logo3} alt="" />
                </div>
            </body >
        </div >
    );
};

export default Visiteur;