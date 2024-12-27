

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-wrapper">
                            <img className="img-fluid" src="images/about.png" alt="image"/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="right-wrapper px-4">
                            <h5>Our Introductions</h5>
                            <h1>Agriculture & Organic Product Farm</h1>
                            <h4>Agrios is the largest global organic farm.</h4>
                            <p className="description">There are many variations of passages of lorem ipsum available but the
                                majority have suffered alteration in some form by injected humor or
                                random word which don’t look even.</p>
                            <div className="d-flex mb-4">
                                <div className="d-flex align-items-center gap-4">
                                    <img src="images/about-icon1.svg" alt="icon"/>
                                    <h3>Growing fruits
                                        vegetables</h3>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <img src="images/about-icon1.svg" alt="icon"/>
                                    <h3>Growing fruits
                                        vegetables</h3>
                                </div>
                            </div>
                            <p className="list-text"><img className="me-2" src="images/correct.svg" alt="icon"/>Lorem Ipsum is not simply random text.</p>
                            <p className="list-text"><img className="me-2" src="images/correct.svg" alt="icon"/>Making this the first true generator on the
                                internet.</p>
                            <button className="primary-btn mt-5">Discover More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;