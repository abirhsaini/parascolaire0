import React from 'react';
import Navbawr from '../coponenets/Navbar';
import "../style/home.css"
import logo from "../images/logo2.png"
import logo3 from "../images/hh.jpeg"
import image3 from "../images/plus.png"
import image4 from "../images/DJF.jpeg"
import image5 from "../images/CAS.jpeg"
import image6 from "../images/ARTY.jpeg"



const home = () => {

    return (
        <div>
            <Navbawr />
            <body className='allclub' >
                <ul class="nav justify-content-center" >
                    <li class="nav-item">
                        <a class="nav-link active" className='color' id='active' href="/home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" className='color' href="/allclubs" >ALL CLUBS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" className='color' href="schedule" >SCHEDULE</a>
                    </li>
                </ul>
                <div className='all'>
                    <div className='inline'>
                        <hr className='hr1' />
                        <span className='tout'> <span className='blue1'>A</span>nnonce</span>
                        <hr className='hr2' />

                    </div>

                    <div className='heloe'>
                        <div class="container mt-2" >


                            <div class="row">
                                <div class="col-sm-5" >
                                    <div class="card card-block">

                                        <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset" />
                                        <h5 class="card-title mt-3 mb-3">LMPS premier groupe panafricain spécialisé dans les métiers de la CyberSécurité. LMPS Group offre une gamme complète de provices allant de l’audit et le conseil,</h5>
                                        <span className='gre' >Learn more</span>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <div class="card card-block">

                                        <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset" />
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
                        <span className='tout'> <span className='blue1'>My</span>Clubs</span>
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
                        <span className='tout'> <span className='blue1'>My</span>Tasks</span>
                        <hr className='hr2' />

                    </div>
                    <div className='heloe'>
                        <div class="container mt-2" >


                            <div class="row">
                                <div class="col-sm-6" >
                                    <div class="card card-block">

                                        <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset" />
                                        <h5 class="card-title mt-3 mb-3">Vous étes invitées a representer le club A2S dans l’evenement South digital things , veuillez comfirmer votre presence.</h5>
                                        <span className='gre' > Veuiller se presenter a l’heure</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card card-block">

                                        <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset" />
                                        <h5 class="card-title  mt-3 mb-3">Vous participez au collecte  le  prochain Mardi le 8 fevrier 2022 .
Ce Collecte aura lieu a rabat hay al irfane Bloc D.
</h5>
                                        <span className='gre' >Veuillez se presenter a l’heure</span>

                                    </div>


                                </div>
                                <div class="col-sm-6">
                                    <div class="card card-block">

                                        <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset" />
                                        <h5 class="card-title  mt-3 mb-3">Vous participez au collecte  le  prochain Mardi le 8 fevrier 2022 .
Ce Collecte aura lieu a rabat hay al irfane Bloc D.
</h5>
                                        <span className='gre' >Veuillez se presenter a l’heure</span>

                                    </div>


                                </div>
                                <div class="col-sm-6">
                                    <div class="card card-block">

                                        <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset" />
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
            </body >
        </div >
    );
};

export default home;