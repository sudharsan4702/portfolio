import React from 'react';

function Project() {

    return (
        <div className="p-2 project mx-1 my-5" id="project" data-aos="fade">
            <h1 className="display-5 fw-bold text-body-emphasis text-center">
                Projects
            </h1>

            <div className="row justify-content-center">

                {/* Gather */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        className="card mb-3"
                        data-aos="flip-right"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                    >
                        <div className="card-body text-end">
                            <img
                                src="/gather.png"
                                className="card-img-top mb-2"
                                alt="Gather event-sharing platform"
                                loading="lazy"
                                decoding="async"
                            />
                            <h5 className="card-title text-center fw-bold">
                                Gather
                            </h5>
                            <p className="card-text text-justify">
                                A full-stack event platform with personalized pages, schedules, venues,
                                galleries, guest links, QR codes, RSVP tracking, and Razorpay payment integration.
                            </p>

                            <a
                                href="https://github.com/sudharsan4702/gather"
                                className="btn btn-primary me-1 mb-1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub <img src="/arrow-up.png" width="20px" alt="" />
                            </a>
                            <a
                                href="https://gather.sudharsannotout.workers.dev/"
                                className="btn btn-primary mb-1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Demo <img src="/arrow-up.png" width="20px" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* InventoryFlow */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        className="card mb-3"
                        data-aos="flip-left"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                    >
                        <div className="card-body text-end">
                            <img
                                src="/inventoryflow.png"
                                className="card-img-top mb-2"
                                alt="InventoryFlow dashboard"
                                loading="lazy"
                                decoding="async"
                            />
                            <h5 className="card-title text-center fw-bold">
                                InventoryFlow
                            </h5>
                            <p className="card-text text-justify">
                                A MERN stack inventory management application
                                for managing products and orders, updating
                                stock, and visualizing sales data through
                                dashboard charts.
                            </p>

                            <a
                                href="https://github.com/sudharsan4702/inventoryflow"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub <img src="/arrow-up.png" width="20px" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Instagram UI */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        className="card mb-3"
                        data-aos="flip-right"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                    >
                        <div className="card-body text-end">
                            <img
                                src="/instagram.png"
                                className="card-img-top mb-2"
                                alt="Instagram UI recreation"
                                loading="lazy"
                                decoding="async"
                            />
                            <h5 className="card-title text-center fw-bold">
                                Instagram UI
                            </h5>
                            <p className="card-text text-justify">
                                A React frontend project recreating Instagram's
                                layout with reusable components for posts,
                                stories, and the top navigation bar.
                            </p>

                            <a
                                href="https://github.com/sudharsan4702/instagram"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub <img src="/arrow-up.png" width="20px" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Headlines Scraper */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        className="card mb-3"
                        data-aos="flip-left"
                        data-aos-delay="400"
                        data-aos-duration="1500"
                    >
                        <div className="card-body text-end">
                            <img
                                src="/scraper.png"
                                className="card-img-top mb-2"
                                alt="News headlines scraper"
                                loading="lazy"
                                decoding="async"
                            />
                            <h5 className="card-title text-center fw-bold">
                                Headlines Scraper
                            </h5>
                            <p className="card-text text-justify">
                                A Python web application built with Requests,
                                BeautifulSoup, and Flask to fetch and display
                                news headlines from external websites.
                            </p>

                            <a
                                href="https://github.com/sudharsan4702/Headlines-site"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub <img src="/arrow-up.png" width="20px" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* AI Behavior Simulation */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        className="card mb-3"
                        data-aos="flip-right"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                    >
                        <div className="card-body text-end">
                            <img
                                src="/research_model.png"
                                className="card-img-top mb-2"
                                alt="AI behavior simulation in Godot"
                                loading="lazy"
                                decoding="async"
                            />
                            <h5 className="card-title text-center fw-bold">
                                AI Behavior Simulation
                            </h5>
                            <p className="card-text text-justify">
                                A 2D Godot game exploring Finite State Machines
                                and Genetic Algorithms for comparative AI
                                research, with a playable version hosted online.
                            </p>

                            <a
                                href="https://github.com/sudharsan4702/FSM-vs-GA"
                                className="btn btn-primary me-1 mb-1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub <img src="/arrow-up.png" width="20px" alt="" />
                            </a>
                            <a
                                href="https://6841949ab301680c49717bb5--benevolent-unicorn-895802.netlify.app/"
                                className="btn btn-primary mb-1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Demo <img src="/arrow-up.png" width="20px" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Publication */}
            <div
                className="p-2 project mx-1 my-5"
                data-aos="zoom-in"
                data-aos-duration="1500"
            >
                <h1 className="display-5 fw-bold text-body-emphasis text-center">
                    Publication
                </h1>

                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <div className="card mb-3">
                            <div className="card-body text-end">
                                <img
                                    src="/paper.png"
                                    className="card-img-top mb-2"
                                    alt="Research paper on AI techniques in gaming"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <h5 className="card-title text-center fw-bold">
                                    AI in Gaming – Research Paper
                                </h5>
                                <p className="card-text text-justify">
                                    Published a research paper titled
                                    "A Comparative Study of AI Techniques in
                                    Gaming: Top-Down vs. Bottom-Up Approach,"
                                    exploring AI strategies used in game
                                    development and their practical implications.
                                </p>

                                <a
                                    href="https://www.ijcrt.org/papers/IJCRT2502737.pdf"
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Paper <img src="/arrow-up.png" width="20px" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
