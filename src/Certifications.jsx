import React from 'react';

function Certifications() {

    return (
        <div className="container p-4 cert" id="certifications" data-aos="zoom-in" data-aos-duration="2000">

            <h1 className="display-5 fw-bold text-body-emphasis text-center ">Certifications</h1>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="/Certificates/python_udemy.webp" className="d-block w-100" alt="Python Udemy Certificate" decoding="async" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/Certificates/sql.webp" className="d-block w-100" alt="SQL Certificate" loading="lazy" decoding="async" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/Certificates/ijcrt.webp" className="d-block w-100" alt="IJCRT Research Publication Certificate" loading="lazy" decoding="async" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/Certificates/python_nptel.webp" className="d-block w-100" alt="Python NPTEL Certificate" loading="lazy" decoding="async" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/Certificates/python_besant.webp" className="d-block w-100" alt="Python Besant Certificate" loading="lazy" decoding="async" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/Certificates/python_guvi.webp" className="d-block w-100" alt="Python Guvi Certificate" loading="lazy" decoding="async" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/Certificates/postman.webp" className="d-block w-100" alt="Postman API Certificate" loading="lazy" decoding="async" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/Certificates/blender_udemy.webp" className="d-block w-100" alt="Blender Udemy Certificate" loading="lazy" decoding="async" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/Certificates/srm.webp" className="d-block w-100" alt="SRM Certificate" loading="lazy" decoding="async" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-body-secondary" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-body-secondary" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Certifications