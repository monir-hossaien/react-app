

const Navbar = () => {
    return (
        <section className="navbar-section d-flex py-3 align-items-center sticky-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div>
                            <ul className="d-flex gap-5">
                                <li><a href="#" className="active">Home</a><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><a href="#projects">Projects</a><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><a href="#news">News</a><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><a href="#shop">Shop</a><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="d-flex gap-4 justify-content-end">
                            <img className="img-fluid" src="images/search.svg" alt=""/>
                            <img className="img-fluid" src="images/cart.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;