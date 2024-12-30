import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <section className="header-section d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo">
                            <NavLink to="/" ><img className='img-fluid' src="images/logo.svg" alt="logo"/></NavLink>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="social-icon d-flex gap-2 justify-content-end">
                                    <a href="#"><img src="images/Icon.svg" alt="icon"/></a>
                                    <a href="#"><img src="images/facebook.svg" alt="icon"/></a>
                                    <a href="#"><img src="images/pinterest.svg" alt="icon"/></a>
                                    <a href="#"><img src="images/instragram.svg" alt="icon"/></a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex gap-3 justify-content-center">
                                    <img src="images/phone.svg" alt="icon"/>
                                    <div>
                                        <p className="text">Call anytime</p>
                                        <p className="contact-info">+ 98 (000) - 9630</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex gap-3 mail-div justify-content-center">
                                    <img src="images/mail.svg" alt="icon"/>
                                    <div>
                                        <p className="text">Send email</p>
                                        <p className="contact-info">ambed@agrios.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex gap-3 justify-content-end">
                                    <img src="images/location.svg" alt="icon"/>
                                    <div>
                                        <p className="text">380 St Kilda Road</p>
                                        <p className="contact-info">Melbourne, Australia</p>
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

export default Header;