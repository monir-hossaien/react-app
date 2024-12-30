import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";


const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <Navbar/>
            {children}
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Layout;