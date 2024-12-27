

const Footer = () => {
    return (
        <section className="footer-section d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left-wrapper d-flex gap-1">
                            <p>© All Copyright {new Date().getFullYear()} by </p>
                            <p><a href="#">Shawonetc Themes</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right-wrapper d-flex justify-content-end gap-3">
                            <div><a href="#">Terms of Use</a></div>
                            <div className="middle_div"></div>
                            <div><a href="#">Privacy Policy</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;