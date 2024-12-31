

const NotFound = () => {
    return (
        <div>
            <div className="not-found-section">
                <div className="not_found shadow-lg">
                    <div>
                        <img className="img-fluid error_icon " src="images/error-icon-25240.png" alt="icon"/>
                    </div>
                    <div>
                        <h1 className="text-danger fw-bold d-flex justify-content-center align-items-center">404! <br/> Not
                            Found</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;