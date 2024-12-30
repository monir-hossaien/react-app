
import Hero from "../components/Hero.jsx";
import Feature from "../components/Feature.jsx";
import About from "../components/About.jsx";
import Service from "../components/Service.jsx";
import Project from "../components/Project.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Benefit from "../components/Benefit.jsx";
import Blog from "../components/Blog.jsx";
import Achievement from "../components/Achievement.jsx";
import Layout from "../layout/Layout.jsx";



const HomePage = () => {
    return (
        <div>
            <Layout>
                <Hero/>
                <Feature/>
                <About/>
                <Service/>
                <Achievement/>
                <Project/>
                <Testimonial/>
                <Benefit/>
                <Blog/>
            </Layout>
        </div>
    );
};

export default HomePage;