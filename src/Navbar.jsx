import './Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';




function Navbar() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div className='one' data-aos="fade-down">
            <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">HELLO</a>
                <button className="navbar-toggler collapsed mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> </button>
                <div className="navbar-collapse collapse" id="navbarsExample01">
                    <ul className="navbar-nav justify-content-center mb-2">
                        <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Home</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#project">Projects</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#certifications">Certifications</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#about">About</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#contact">Contact</a> </li>
                    </ul>
                </div>
            </div> </nav>
        </div>
        
    );
}

export default Navbar;