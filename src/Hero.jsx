import './Hero.css'
import React from 'react';

function Hero() {
    return (
        <div className='hero' id='hero'>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6" data-aos="flip-left" data-aos-delay="500" data-aos-duration="2000">
                        <img src="/brand-logo-removebg.png" className="d-block mx-lg-auto img-fluid floating-card" alt="Sudharsan logo" width="650" height="500" fetchPriority="high" decoding="async" />
                    </div>
                    <div className="col-lg-6 name-card">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" data-aos="slide-right">I am Sudharsan</h1>
                        <p className="lead">Software Developer</p>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start" data-aos="zoom-in">
                            <a href='https://www.linkedin.com/in/sudharsantechie/' type="button" className="btn btn-primary btn-lg px-4 me-md-2">Connect</a>
                            <a href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer" type="button" className="btn btn-primary btn-lg px-4 me-md-2">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;