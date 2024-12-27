
function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate.replace(',', ''); // Remove comma between month and year
}
const today = new Date();


const Contact = () => {
    return (
        <>
            <div className="blank"></div>
            <section className="contact-section">

                <div className="container">
                    <div className="row">

                        {/*first*/}
                        <div className="col-md-3">
                            <div className="wrapper_1">
                                <img className="img-fluid logo" src="images/footer-logo.svg" alt="image"/>
                                <div className="mt-3">
                                    <p>There are many variations of passages
                                        of lorem ipsum available, but the
                                        majority suffered.</p>
                                    <div className="d-flex gap-4 mt-3">
                                        <a href=""><img className="img-fluid" src="images/footer_twit.svg" alt="icon"/></a>
                                        <a href=""><img className="img-fluid" src="images/footer_fb.svg" alt="icon"/></a>
                                        <a href=""><img className="img-fluid" src="images/footer_prin.svg" alt="icon"/></a>
                                        <a href=""><img className="img-fluid" src="images/footer_insta.svg" alt="icon"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*second*/}
                        <div className="col-md-2">
                            <div className="wrapper_2">
                                <h6>Explore</h6>
                                <ul className="mt-3">
                                    <div className="d-flex gap-2">
                                        <img className="img-fluid" src="images/footer_leap.svg" alt="icon"/>
                                        <a href="#about">
                                            <li>About</li>
                                        </a>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <img className="img-fluid" src="images/footer_leap.svg" alt="icon"/>
                                        <a href="#services">
                                            <li>Services</li>
                                        </a>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <img className="img-fluid" src="images/footer_leap.svg" alt="icon"/>
                                        <a href="#projects">
                                            <li>Our Projects</li>
                                        </a>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <img className="img-fluid" src="images/footer_leap.svg" alt="icon"/>
                                        <a href="#about">
                                            <li>Meet the Farmers</li>
                                        </a>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <img className="img-fluid" src="images/footer_leap.svg" alt="icon"/>
                                        <a href="#news">
                                            <li>Latest News</li>
                                        </a>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <img className="img-fluid" src="images/footer_leap.svg" alt="icon"/>
                                        <a href="#contact">
                                            <li>Contact</li>
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        {/*third*/}
                        <div className="col-md-4">
                            <div className="wrapper_3">
                                <h6>News</h6>
                                <div className="d-flex flex-column gap-4 mt-3 align-items-center">
                                    <div>
                                        <p>Bringing Food Production <br/>
                                            Back To Cities</p>
                                        <p className="date">{formatDate(today)}</p>
                                    </div>
                                    <div>
                                        <p>The Future of Farming, <br/>
                                            Smart Irrigation Solutions</p>
                                        <p className="date">{formatDate(today)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*fourth*/}
                        <div className="col-md-3">
                            <div className="wrapper_4">
                                <h6>Contact</h6>
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex gap-2">
                                        <div><img src="images/footer_phn.svg" alt="icon"/></div>
                                        <div><p>666 888 0000</p></div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <div><img src="images/footer_mail.svg" alt="icon"/></div>
                                        <div><p>needhelp@company.com</p></div>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <div><img src="images/footer_loca.svg" alt="icon"/></div>
                                        <div><p>80 broklyn golden street line New York, USA</p></div>
                                    </div>

                                    <div className="input-group mt-2">
                                        <input type="text" className="form-control footer_input" placeholder="Your Email Address"
                                               aria-label="Your Email Address" aria-describedby="input-group-right"/>
                                        <span className="input-group-text" id="input-group-right-example"><img src="images/footer_input.svg" alt="icon"/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Contact;