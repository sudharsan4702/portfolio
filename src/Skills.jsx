import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const style={"width":"5rem","height":"5rem","padding":"4px"}

function Skills(){

    useEffect(() => {
            AOS.init({ duration: 1000 });
          }, []);

    return (
        <div className="skill-box " data-aos="fade" data-aos-anchor-placement="center-bottom" id="skills" data-aos-offset="100">
            <h1 className="display-5 fw-bold text-body-emphasis">SKILLS</h1>
            <div className="row justify-content-around mt-3" data-aos="fade-down" data-aos-duration="2000">
                <div className="" style={style}><img width="100%" src="/logo/html.png" /></div>
                <div className="" style={style}><img width="100%" src="/logo/css.png" /></div>
                <div className="" style={style}><img width="100%" src="/logo/js.png" /></div>
                <div className="" style={style}><img width="100%" src="/logo/python.png" /></div>
            </div>
            <div className="row justify-content-around mt-3" data-aos="fade" data-aos-duration="2000">
                <div className="" style={style}><img width="100%" src="/logo/nodejs.png" /></div>
                <div className="" style={style}><img width="100%" src="/logo/expressjs.png" /></div>
                <div className="" style={style}><img width="100%" src="/logo/mongodb.png" /></div>
            </div>
            <div className="row justify-content-around mt-3" data-aos="fade-up" data-aos-duration="2000">
                <div className="" style={style}><img width="100%" src="/logo/react.png" /></div>
                <div className="" style={style}><img width="100%" src="/logo/oop.jpg" /></div>
                <div className="" style={style}><img width="100%" src="/logo/postman.png" /></div>
            </div>
        </div>
    );
}

export default Skills;