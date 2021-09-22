import React from "react";

class BannersHomeComponent extends React.Component {

    render(){
        return(
            <div className="bannershome">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"><a href=""><img src="img/banner-home-clientes.jpg"/></a></div>
                        <div className="col-md-6"><a href=""><img src="img/banner-home-servicios.jpg"/></a></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BannersHomeComponent;