import React,{Component} from "react";

class CarouselComponent extends Component {

    render (){
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
                 style={{right: '36px', width: '1284px'}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/slider-desktop-01.jpg" alt="img1" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="img/slider-desktop-01.jpg" alt="img2" className="d-block w-100"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
export default CarouselComponent;