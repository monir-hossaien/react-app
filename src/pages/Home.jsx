
import Hero from "../components/Hero.jsx";
import Feature from "../components/Feature.jsx";
import About from "../components/About.jsx";
import Service from "../components/Service.jsx";
import Project from "../components/Project.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Benefit from "../components/Benefit.jsx";
import Blog from "../components/Blog.jsx";
import Contact from "../components/Contact.jsx";
import Achievement from "../components/Achievement.jsx";



const Home = () => {
    return (
        <div>
            <Hero/>
            <Feature/>
            <About/>
            <Service/>
            <Achievement/>
            <Project/>
            <Testimonial/>
            <Benefit/>
            <Blog/>
            <Contact/>
        </div>
    );
};

export default Home;