// import React from 'react';
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
// import { useNavigate } from "react-router-dom";  


function MainCarousal() {
    const navigate = useNavigate(); 
    return (
        <>
            {/* logo + title */}
            <div className="d-flex justify-content-center align-items-center logo-title">
                <img src="src\images\our_logo.png" alt="Logo" />
                <h1 className="m-0">Matchmatics</h1>
            </div>

            {/* carousal cards */}
            <div
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="500"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    
                        <div 
                        className="card text-bg-dark uniform-card sport-card"
                        role='button'
                        style={{cursor:'pointer'}}
                        onClick={() => navigate('/cricket')}

                        >
                            <img
                                src="src/images/cric_main.webp"
                                className="card-img uniform-img"
                                alt="..."
                            />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center p-0">
                                <h1 className="m-0 sport-label">CRICKET</h1>
                            </div>
                        </div>
                    
                    </div>
                    <div className="carousel-item">
                        <div 
                        className="card text-bg-dark uniform-card sport-card"
                        role='button'
                        style={{cursor:'pointer'}}
                        onClick={() => navigate('/fifa')}
                        >
                            <img
                                src="src/images/fifa_main.jpg"
                                className="card-img uniform-img"
                                alt="..."
                            />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center p-0">
                                <h1 className="m-0 sport-label">FIFA</h1>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card text-bg-dark uniform-card sport-card"
                        role='button'
                        style={{cursor:'pointer'}}
                        onClick={() => navigate('/nba')}
                        >
                            <img
                                src="src/images/nba_main.jpg"
                                className="card-img uniform-img"
                                alt="..."
                            />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center p-0">
                                <h1 className="m-0 sport-label">NBA</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contributors */}

            <div className="card-title text-white fs-1 mt-4 pt-4 m-2 p-2 logo-title">
                <h1 className="text-center">Contributors</h1>
            </div>
            <div className="row g-4 justify-content-center py-2 my-2">
                <div className="col">
                    <div className="card w-75 mx-auto h-100 authors">
                        <img
                            src="src/images/girl.jpg"
                            className="card-img-top w-25 mx-auto "
                            alt="..."
                        />
                        <div className="card-body mx-auto text-center ">
                            <h5 className="card-title text-black ">
                                Anchal Daga
                            </h5>
                            <p className="card-text text-black">
                                Email ID: anchalda@buffalo.edu 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card w-75 mx-auto h-100 authors">
                        <img
                            src="src/images/boy.png"
                            className="card-img-top w-25 mx-auto "
                            alt="..."
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-black">V L Sivasai Mani Harshith Bhattaram</h5>
                            <p className="card-text text-black">
                                Email ID: vlsivasa@buffalo.edu 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card w-75 mx-auto h-100 authors">
                        <img
                            src="src/images/girl.jpg"
                            className="card-img-top w-25 mx-auto "
                            alt="..."
                        />
                        <div className="card-body mx-auto text-center ">
                            <h5 className="card-title text-black ">Shruti Kumari</h5>
                            <p className="card-text text-black">
                                Email ID: skumari2@buffalo.edu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainCarousal;
