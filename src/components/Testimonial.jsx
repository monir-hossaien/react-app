
const Testimonial = () => {
    return (
        <section className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-wrapper">
                            <h3>Our Testimonials</h3>
                            <h1>What They're Talking About Agrios</h1>
                            <p>There are many variations of passages of
                                available but the majortity have sufferred
                                alteration in some form by injected humor or
                                random word which don't look even.</p>
                            <button className="primary-btn mt-4">View All Testimonials</button>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="right-wrapper">
                            <div className="row">
                                <div className="col-10">
                                    <p>There are many variations of passages of available but the
                                        majority have suffered alteration in some form by injected
                                        humor or random word which don't look even.</p>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6>Bonnie Tolbert</h6>
                                        <div>
                                            <img className="img-fluid" src="images/star.svg" alt="image"/>
                                            <img className="img-fluid" src="images/star.svg" alt="image"/>
                                            <img className="img-fluid" src="images/star.svg" alt="image"/>
                                            <img className="img-fluid" src="images/star.svg" alt="image"/>
                                            <img className="img-fluid" src="images/star.svg" alt="image"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-2">
                                    <div className=" d-flex h-100 justify-content-center">
                                        <img className="img-fluid" src="images/image fill.svg" alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;