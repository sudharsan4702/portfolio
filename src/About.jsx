import './About.css'
import Skills from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function About() {

    useEffect(() => {
            AOS.init({ duration: 1000 });
          }, []);

    return (
        <div className="about" id='about' data-aos="fade" data-aos-duration="1570">
            <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold text-body-emphasis">About Me</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 text-justify" data-aos="fade">I'm Sudharsan, a curious and adaptable full-stack developer who loves turning ideas into real, working products. I work primarily with the MERN stack, but I’m always open to learning new tools or solving problems beyond my comfort zone.</p>
                        <p className="lead mb-4 text-justify" data-aos="fade">I enjoy building things — figuring out how things work, breaking them down, and making them better. Whether it’s a small feature or a complex system, I bring a mindset of “I’ll figure it out and make it happen.”</p>
                        <p className="lead mb-4 text-justify" data-aos="fade">I don't limit myself to one role or style — I’m equally excited to build, debug, design, or learn. If you're looking for someone who can wear many hats and grow with your team, let’s talk.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            
                        </div>
                        <Skills/>
                    </div>
                    
            </div>
            
        </div>
    );
}

export default About;