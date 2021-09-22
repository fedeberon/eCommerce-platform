import React from "react";

class FeaturedProductsComponent extends React.Component {

    render() {
        return (
            <div className="destacadoshome">
                <div className="container">
                    <h4 className="tithome">Productos destacados</h4>
                    <div className="row">

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href="/details/D6948391225609D">
                                    <figure><img src="img/producto-01.jpg" alt="Producto Destacado 1" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Mouse HP M270 Gaming Negro Óptico</div>
                                        <div className="price">$13.000,00</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href="/details/E091163255673E">
                                    <figure>
                                        <div className="label">20%</div>
                                        <img src="img/producto-02.jpg" alt="Producto Destacado 2"className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Auriculares con Micrófono Genius HS-610 - Rojo</div>
                                        <div className="price"><span className="offer">$7000,00</span>$5650,00</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href="/details/HP4645">
                                    <figure><img src="img/producto-03.jpg" alt="Producto Destacado 3" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Impresora HP Deskjet Ink 2145</div>
                                        <div className="price">$69.650,00</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href="/details/81AW00004AR">
                                    <figure><img src="img/producto-04.jpg" alt="Producto Destacado 4" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Notebook Lenovo V330-15ISK I3</div>
                                        <div className="price">$200.000,00</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="/products" className="btn btn-lg btn-light" role="button" aria-pressed="true">Ver todo</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedProductsComponent;