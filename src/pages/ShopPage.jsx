import Service from "../components/Service.jsx";
import Layout from "../layout/Layout.jsx";
import Testimonial from "../components/Testimonial.jsx";

const ShopPage = () => {
    return (
        <div>
            <Layout>
                <Service/>
                <Testimonial/>
            </Layout>
        </div>
    );
};

export default ShopPage;