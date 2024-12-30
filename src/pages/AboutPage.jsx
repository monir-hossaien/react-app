import About from "../components/About.jsx";
import Layout from "../layout/Layout.jsx";
import Service from "../components/Service.jsx";
import Project from "../components/Project.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Blog from "../components/Blog.jsx";


const AboutPage = () => {
    return (
        <div>
            <Layout>
                <About/>
                <Service/>
                <Project/>
                <Testimonial/>
                <Blog/>
            </Layout>
        </div>
    );
};

export default AboutPage;