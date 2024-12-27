

const Benefit = () => {
    return (
        <section className="benefit-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="left-wrapper">
                            <img className="img-fluid" src="images/benefit-img.svg" alt="image"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="write-wrapper">
                            <h3>Our Farm Benefits</h3>
                            <h1>Why Choose Agrios
                                Market</h1>
                            <p className="my-2">There are many variations of passages of available but the
                                majortity have sufferred alteration in some form by injected
                                humor or random word which don't look even.</p>

                            <div>
                                <div className="d-flex gap-3 py-2">
                                    <img className="img-fluid" src="images/benefit-img1.svg" alt="icon"/>
                                    <div>
                                        <h4>Quality Organic Food</h4>
                                        <p>There are variation You need to be sure there is
                                            anything hidden in the middle of text.</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 py-2">
                                    <img className="img-fluid" src="images/benefit-img2.svg" alt="icon"/>
                                    <div>
                                        <h4>Professional Farmers</h4>
                                        <p>There are variation You need to be sure there is
                                            anything hidden in the middle of text.</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 py-2">
                                    <img className="img-fluid" src="images/benefit-img3.svg" alt="icon"/>
                                    <div>
                                        <h4>Quality Products</h4>
                                        <p>There are variation You need to be sure there is
                                            anything hidden in the middle of text.</p>
                                    </div>
                                </div>
                                <button className="primary-btn mt-4">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefit;