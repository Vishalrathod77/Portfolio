// src/components/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
            <div className="row">
                <div className="col-md-4">
                    <div className="card project-card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project 1" />
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">A brief description of Project 1.</p>
                            <button className="btn btn-outline-primary">View Project</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card project-card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project 2" />
                        <div className="card-body">
                            <h5 className="card-title">Project 2</h5>
                            <p className="card-text">A brief description of Project 2.</p>
                            <button className="btn btn-outline-primary">View Project</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card project-card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project 3" />
                        <div className="card-body">
                            <h5 className="card-title">Project 3</h5>
                            <p className="card-text">A brief description of Project 3.</p>
                            <button className="btn btn-outline-primary">View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
