import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Project() {

    useEffect(() => {
                AOS.init({ duration: 1000 });
              }, []);

    return (
        <div className="p-2 project mx-1 my-5" id="project" data-aos="fade">
            <h1 className="display-5 fw-bold text-body-emphasis text-center ">Projects</h1>
            <div className="row justify-content-center">
                <div className="col-sm-3">
                    <div className="card mb-1" data-aos="flip-right" data-aos-delay="200" data-aos-duration="2000">
                        <div className="card-body text-end">
                            <img src="/inventoryflow.png" className="card-img-top mb-2" alt="..." />
                            <h5 className="card-title text-center fw-bold">InventoryFlow</h5>
                            <p className="card-text text-justify">A basic MERN stack project for managing product inventory and orders, with simple pages to view items, update stock, and display sales data using charts.</p>

                            <a href="https://github.com/sudharsan4702/inventoryflow" className="btn btn-primary">Github  <img src="/arrow-up.png" width={"20px"} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mb-1" data-aos="flip-left" data-aos-delay="400" data-aos-duration="2000">
                        <div className="card-body text-end">
                            <img src="/instagram.png" className="card-img-top mb-2" alt="..." />
                            <h5 className="card-title text-center fw-bold">Instagram UI</h5>
                            <p className="card-text text-justify">A simple frontend practice project built with React to recreate Instagram’s layout using reusable components for posts, stories, and the top navigation bar.</p>
                            <a href="https://github.com/sudharsan4702/instagram" className="btn btn-primary">Github  <img src="/arrow-up.png" width={"20px"} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mb-1" data-aos="flip-right" data-aos-delay="600" data-aos-duration="2000">
                        <div className="card-body text-end">
                            <img src="/scraper.png" className="card-img-top mb-2" alt="..." />
                            <h5 className="card-title text-center fw-bold">Headlines Scraper</h5>
                            <p className="card-text text-justify">Developed a Python-based web scraping app using requests, BeautifulSoup, and Flask to fetch and display real-time news headlines from external websites.</p>
                            <a href="https://github.com/sudharsan4702/Headlines-site" className="btn btn-primary">Github  <img src="/arrow-up.png" width={"20px"} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mb-1" data-aos="flip-left" data-aos-delay="800" data-aos-duration="2000">
                        <div className="card-body text-end">
                            <img src="/research_model.png" className="card-img-top mb-2" alt="..." />
                            <h5 className="card-title text-center fw-bold">AI Behavior Simulation</h5>
                            <p className="card-text text-justify">Built a 2D game setup in Godot to experiment with AI concepts like FSM and Genetic Algorithms for research comparison; exported and hosted on Netlify.</p>
                            <a href="https://github.com/sudharsan4702/FSM-vs-GA" className="btn btn-primary me-1">Github  <img src="/arrow-up.png" width={"20px"} /></a>
                            <a href="https://6841949ab301680c49717bb5--benevolent-unicorn-895802.netlify.app/" className="btn btn-primary">live  <img src="/arrow-up.png" width={"20px"} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-2 project mx-1 my-5" data-aos="zoom-in" data-aos-duration="2500">
                <h1 className="display-5 fw-bold text-body-emphasis text-center ">Publication</h1>
                <div className="row justify-content-center">
                    <div className="col-sm-5">
                        <div className="card mb-1">
                            <div className="card-body text-end">
                                <img src="/paper.png" className="card-img-top mb-2" alt="..." />
                                <h5 className="card-title text-center fw-bold">AI in Gaming – Research Paper</h5>
                                <p className="card-text text-justify">Published a research paper titled “A Comparative Study of AI Techniques in Gaming: Top-Down vs. Bottom-Up Approach”, exploring different AI strategies used in game development and their practical implications.</p>

                                <a href="https://www.ijcrt.org/papers/IJCRT2502737.pdf" className="btn btn-primary">View paper  <img src="/arrow-up.png" width={"20px"} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}

export default Project;