
const Hero = () => {
    return (
        <div>
            <section  className="hero-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="wrapper text-white">
                                <h6 className="hero-title">Welcome to agrios farming</h6>
                                <h1 className="hero-text">Agriculture <span>&</span> <br/>Eco Farming</h1>
                                <p className="hero-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <div className="d-flex gap-3 mt-5">
                                    <button className="hero-btn">Discover More</button>
                                    <img className="img-fluid" src="images/hero-leap.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;