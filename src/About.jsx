import './About.css'
import Skills from './Skills';
import React from 'react';

function About() {
    return (
        <div className="about" id='about' data-aos="fade" data-aos-duration="1570">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">About Me</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 text-justify" data-aos="fade">
                        I'm Sudharsan, a software developer working with Java, Spring Boot, REST APIs, SQL, and React. I build full-stack applications and enjoy connecting backend logic, databases, and frontend interfaces to create useful, maintainable products that solve real everyday problems.
                    </p>

                    <p className="lead mb-4 text-justify" data-aos="fade">
                        I enjoy turning ideas into working software, from designing REST endpoints and database models to building responsive React interfaces. My projects help me practice authentication, payment integration, data handling, and the details that make applications reliable for users.
                    </p>

                    <p className="lead mb-4 text-justify" data-aos="fade">
                        I'm focused on growing as a Java full-stack developer, strengthening my backend fundamentals while improving frontend usability. I value code, practical problem-solving, and learning by building, testing, debugging, and refining features that people can use.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                    </div>
                    <Skills />
                </div>

            </div>

        </div>
    );
}

export default About;