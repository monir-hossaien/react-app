
const Service = () => {
    return (
        <section className="services py-5">
            <div className="top-wrapper text-center h-50">
                <h4>Our Services</h4>
                <h1>What We Offer</h1>
            </div>
            <div className="bottom-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <a href="#"><img className="img-fluid" src="images/image1.svg" alt="image"/></a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <a href="#"><img className="img-fluid" src="images/image2.svg" alt="image"/></a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <a href="#"><img className="img-fluid" src="images/image3.svg" alt="image"/></a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <a href="#"><img className="img-fluid" src="images/image4.svg" alt="image"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;