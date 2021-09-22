import React from "react";

class CategoriesHomeComponent extends React.Component {

    render(){
        return(
            <div className="categoriasshome">
                <div className="container">
                    <h4 className="tithome">Nuestros productos</h4>
                    <div className="row">
                        <div className="col-sm-4">
                            <a href="/" className="banner">
                                <img src="/img/banner-categoria-01.jpg" alt="cat1" className="foto"/>
                                    <div className="text align-middle">
                                        <div className="h2">MOUSES Y TECLADOS</div>
                                        <div className="icon"><img alt="Ver productos" src="img/arrow-category.svg"/></div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="/" className="banner">
                                <img src="img/banner-categoria-02.jpg" alt="cat2" className="foto"/>
                                    <div className="text align-middle">
                                        <div className="h2">COMPUTADORAS</div>
                                        <div className="icon"><img alt="Ver productos"  src="img/arrow-category.svg"/></div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="/" className="banner">
                                <img src="img/banner-categoria-03.jpg" alt="cat3" className="foto"/>
                                    <div className="text align-middle">
                                        <div className="h2">IMPRESIÓN</div>
                                        <div className="icon"><img alt="Ver productos" src="img/arrow-category.svg"/></div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="/" className="banner">
                                <img src="img/banner-categoria-04.jpg" alt="cat4" className="foto"/>
                                    <div className="text align-middle">
                                        <div className="h2">ACCESORIOS</div>
                                        <div className="icon"><img alt="Ver productos" src="img/arrow-category.svg"/></div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="/" className="banner">
                                <img src="img/banner-categoria-05.jpg" alt="cat5" className="foto"/>
                                    <div className="text align-middle">
                                        <div className="h2">AUDIO</div>
                                        <div className="icon"><img alt="Ver productos" src="img/arrow-category.svg"/></div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="/" className="banner">
                                <img src="img/banner-categoria-06.jpg" alt="cat6" className="foto"/>
                                    <div className="text align-middle">
                                        <div className="h2">GAMING</div>
                                        <div className="icon"><img alt="Ver productos" src="img/arrow-category.svg"/></div>
                                    </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CategoriesHomeComponent;