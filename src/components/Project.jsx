

const Project = () => {
    return (
        <section className="project-section py-5">
            <div className="top-wrapper text-center">
                <h4>Recently Completed</h4>
                <h1>Explore Projects</h1>
            </div>
            <div className="bottom-wrapper pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-fluid" src="images/project-img1.svg" alt="image"/>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid" src="images/project-img2.svg" alt="image"/>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid" src="images/project-img3.svg" alt="image"/>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid" src="images/project-img4.svg" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;