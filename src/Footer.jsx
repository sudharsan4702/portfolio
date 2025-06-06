import React, { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {

    useEffect(() => {
                    AOS.init({ duration: 1000 });
                  }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:sudharsan.techie07@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;
    };
    return (

        <div className="container contact my-5" id="contact" data-aos="fade" data-aos-delay="800" data-aos-duration="1500">
            <h1 className="display-5 fw-bold text-body-emphasis text-center">Contact</h1>
            <form onSubmit={handleSubmit} className="form-control">
                <div>
                    <label className="form-label">Name:</label><br />
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="form-label">Email:</label><br />
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="form-label">Message:</label><br />
                    <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary my-2">Send</button>
            </form>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">

                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2025</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/sudharsantechie/" aria-label="Linkedin">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    </li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://github.com/sudharsan4702" aria-label="Github">
                        <i class="bi bi-github"></i>
                    </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer