import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import '../src/assets/css/bootstrap.css'
import '../src/assets/css/style.css'

const App = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default App;