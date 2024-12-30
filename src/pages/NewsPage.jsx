import Blog from "../components/Blog.jsx";
import Layout from "../layout/Layout.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Feature from "../components/Feature.jsx";

const NewsPage = () => {
    return (
        <div>
            <Layout>
                <Blog/>
                <Testimonial/>
            </Layout>
        </div>
    );
};

export default NewsPage;