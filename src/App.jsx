
import '../src/assets/css/bootstrap.css'
import '../src/assets/css/style.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/service" element={<ServicePage/>}/>
                    <Route path="/project" element={<ProjectPage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/shop" element={<ShopPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;