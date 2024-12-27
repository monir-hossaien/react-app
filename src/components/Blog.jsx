function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate.replace(',', ''); // Remove comma between month and year
}
const today = new Date();


const Blog = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="text-center my-4">
                    <h3>From the Blog</h3>
                    <h1>News & Articles</h1>
                </div>
                <div className="row">
                    {/*first*/}
                    <div className="col-md-4">
                        <div className="wrapper shadow-sm">
                            <img className="img-fluid top_img" src="images/blog-img1.png" alt="image"/>
                            <div className="text-center py-4">
                                <div className="date">{
                                    formatDate(today)
                                }</div>
                                <div className="d-flex  gap-3 justify-content-center my-2">
                                    <div>
                                        <img className="img-fluid" src="images/user-icon.svg" alt="icon"/>
                                        <p className="d-inline ms-1">Kevin Martin</p>
                                    </div>
                                    <div>
                                        <img className="img-fluid" src="images/comment-icon.svg" alt="icon"/>
                                        <p className="d-inline ms-1">1 comment</p>
                                    </div>
                                </div>
                                <h6>Bringing Food
                                    <br/>Production Back To<br/>
                                    Cities</h6>
                            </div>
                        </div>
                    </div>
                    {/*second*/}
                    <div className="col-md-4">
                        <div className="wrapper shadow-sm">
                            <img className="img-fluid top_img" src="images/blog-img2.png" alt="image"/>
                            <div className="text-center py-4">
                                <div className="date">{
                                    formatDate(today)
                                }</div>
                                <div className="d-flex  gap-3 justify-content-center my-2">
                                    <div>
                                        <img className="img-fluid" src="images/user-icon.svg" alt="icon"/>
                                        <p className="d-inline ms-1">Devid Warner</p>
                                    </div>
                                    <div>
                                        <img className="img-fluid" src="images/comment-icon.svg" alt="icon"/>
                                        <p className="d-inline ms-1">0 comment</p>
                                    </div>
                                </div>
                                <h6>The Future of
                                    <br/>Farming, Smart<br/>
                                    Irrigation Solutions</h6>
                            </div>
                        </div>
                    </div>
                    {/*third*/}
                    <div className="col-md-4">
                        <div className="wrapper shadow-sm">
                            <img className="img-fluid top_img" src="images/blog-img3.png" alt="image"/>
                            <div className="text-center py-4">
                                <div className="date">{
                                    formatDate(today)
                                }</div>
                                <div className="d-flex  gap-3 justify-content-center my-2">
                                    <div>
                                        <img className="img-fluid" src="images/user-icon.svg" alt="icon"/>
                                        <p className="d-inline ms-1">Kevin Martin</p>
                                    </div>
                                    <div>
                                        <img className="img-fluid" src="images/comment-icon.svg" alt="icon"/>
                                        <p className="d-inline ms-1">2 comment</p>
                                    </div>
                                </div>
                                <h6>Agronomy and
                                    <br/>relation to Other<br/>
                                    Sciences</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;