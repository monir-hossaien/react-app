

const Feature = () => {
    return (
        <section className="feature mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="wrapper text-center shadow-lg">
                            <h3>Feature 01</h3>
                            <h2>We're using a <br/>new technology</h2>
                            <img className="img-fluid" src="images/feature1.svg" alt="icon"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="wrapper text-center shadow-lg">
                            <h3>Feature 02</h3>
                            <h2>Good in smart <br/>
                                organic services</h2>
                            <img className="img-fluid" src="images/feature2.svg" alt="icon"/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="wrapper text-center shadow-lg">
                            <h3>Feature 03</h3>
                            <h2>Reforming <br/>
                                in the systems</h2>
                            <img className="img-fluid" src="images/feature3.svg" alt="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;