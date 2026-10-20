import React from 'react';

const style = { width: "5rem", height: "5rem", padding: "4px" };
const imgStyle = { width: "100%", height: "100%", objectFit: "contain" };

function Skills() {

    return (
        <div className="skill-box" data-aos="fade" data-aos-anchor-placement="center-bottom" id="skills" data-aos-offset="100">
            <h1 className="display-5 fw-bold text-body-emphasis">SKILLS</h1>
            
            {/* Primary Stack: Java, Spring Boot, MySQL, PostgreSQL */}
            <div className="row justify-content-around mt-3" data-aos="fade-down" data-aos-duration="2000">
                <div style={style} title="Java">
                    <img style={imgStyle} src="/logo/java.svg" alt="Java" />
                </div>
                <div style={style} title="Spring Boot">
                    <img style={imgStyle} src="/logo/springboot.svg" alt="Spring Boot" />
                </div>
                <div style={style} title="MySQL">
                    <img style={imgStyle} src="/logo/mysql.svg" alt="MySQL" />
                </div>
                <div style={style} title="PostgreSQL">
                    <img style={imgStyle} src="/logo/postgresql.svg" alt="PostgreSQL" />
                </div>
            </div>

            {/* Frontend: React, JavaScript, HTML, CSS */}
            <div className="row justify-content-around mt-3" data-aos="fade" data-aos-duration="2000">
                <div style={style} title="React">
                    <img style={imgStyle} src="/logo/react.svg" alt="React" />
                </div>
                <div style={style} title="JavaScript">
                    <img style={imgStyle} src="/logo/js.svg" alt="JavaScript" />
                </div>
                <div style={style} title="HTML5">
                    <img style={imgStyle} src="/logo/html.svg" alt="HTML5" />
                </div>
                <div style={style} title="CSS3">
                    <img style={imgStyle} src="/logo/css.svg" alt="CSS3" />
                </div>
            </div>

            {/* Backend & Runtime: Node.js, Express.js, MongoDB, Python */}
            <div className="row justify-content-around mt-3" data-aos="fade" data-aos-duration="2000">
                <div style={style} title="Node.js">
                    <img style={imgStyle} src="/logo/nodejs.svg" alt="Node.js" />
                </div>
                <div style={style} title="Express.js">
                    <img style={imgStyle} src="/logo/express.svg" alt="Express.js" />
                </div>
                <div style={style} title="MongoDB">
                    <img style={imgStyle} src="/logo/mongodb.svg" alt="MongoDB" />
                </div>
                <div style={style} title="Python">
                    <img style={imgStyle} src="/logo/python.svg" alt="Python" />
                </div>
            </div>

            {/* Tools & DevOps: Git, Docker, Postman */}
            <div className="row justify-content-around mt-3" data-aos="fade-up" data-aos-duration="2000">
                <div style={style} title="Git">
                    <img style={imgStyle} src="/logo/git.svg" alt="Git" />
                </div>
                <div style={style} title="Docker">
                    <img style={imgStyle} src="/logo/docker.svg" alt="Docker" />
                </div>
                <div style={style} title="Postman">
                    <img style={imgStyle} src="/logo/postman.svg" alt="Postman" />
                </div>
            </div>
        </div>
    );
}

export default Skills;