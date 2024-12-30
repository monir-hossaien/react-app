import Service from "../components/Service.jsx";
import Layout from "../layout/Layout.jsx";
import Project from "../components/Project.jsx";
import Achievement from "../components/Achievement.jsx";


const ServicePage = () => {
    return (
        <div>
            <Layout>
                <Service/>
                <Project/>
                <Achievement/>
            </Layout>
        </div>
    );
};

export default ServicePage;