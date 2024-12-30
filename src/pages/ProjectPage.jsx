import Project from "../components/Project.jsx";
import Layout from "../layout/Layout.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Benefit from "../components/Benefit.jsx";

const ProjectPage = () => {
    return (
        <div>
            <Layout>
                <Project/>
                <Testimonial/>
                <Benefit/>
            </Layout>
        </div>
    );
};

export default ProjectPage;