import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <section className="navbar-section d-flex py-3 align-items-center sticky-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div>
                            <ul className="d-flex gap-5">
                                <li><NavLink to="/" className="active">Home</NavLink><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/service">Services</NavLink><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><NavLink to="/project">Projects</NavLink><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><NavLink to="/news">News</NavLink><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><NavLink to="/shop">Shop</NavLink><img className="ms-2" src="images/direction.svg" alt="icon"/></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
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