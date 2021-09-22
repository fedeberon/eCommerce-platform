import React, {Component} from 'react';
import 'bootstrap';
import ReactImageZoom from 'react-image-zoom';
import Preference from "../order/preference";
import ProductDetail from "./detail";
import {useDispatch} from 'react-redux';
import api from "../../axios";

class CardDetailComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            currentPage: 1,
        }
    }

    componentDidMount() {
        this.findAll()
    }

    findAll = async () => {
        this.setState({products: [], isLoading: true})
        let data = await api.get('/product/list').then(({data}) => data);
        this.setState({products: data, isLoading: false})
    }

    render() {

        let product = this.state.products.find ( (e) => e.code == this.props.match.params.id)

        return (

            <div>
                <div className="categoria">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item"><a href="/products">Productos</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Detalles</li>
                            </ol>
                        </nav>

                        <div className="row">

                            {/*// <!-- galeria -->*/}
                            <div className="col-sm-6">
                                <div id="carouselProduct" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="label">20%</div>
                                        <img className="zoom-icon" src="/img/zoom-in.svg"/>
                                        <div className="carousel-item active">
                                            <span className="zoom" id="ex1"><ReactImageZoom width={600} height={600}
                                                                                            zoomWidth={700}
                                                                                            img={"/img/producto-01.jpg"}
                                                                                            zoomPosition={"original"}
                                                                                            className="d-block w-100"/>
                                            </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span className="zoom" id="ex2"><ReactImageZoom width={600} height={600}
                                                                                            zoomWidth={700}
                                                                                            img={"/img/producto-02.jpg"}
                                                                                            zoomPosition={"original"}
                                                                                            className="d-block w-100"/>
                                            </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span className="zoom" id="ex3"><ReactImageZoom width={500} height={500}
                                                                                            zoomWidth={600}
                                                                                            img={"/img/producto-03.jpg"}
                                                                                            zoomPosition={"original"}
                                                                                            className="d-block w-100"/>
                                            </span>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselProduct" role="button"
                                       data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"><img
                                        src="/img/arrow-car-left.svg"/></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselProduct" role="button"
                                       data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"><img
                                        src="/img/arrow-car-right.svg"/></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselProduct" data-slide-to="0" className="active"><img
                                            src="/img/producto-01.jpg" className="d-block w-100"/></li>
                                        <li data-target="#carouselProduct" data-slide-to="1"><img
                                            src="/img/producto-02.jpg"
                                            className="d-block w-100"/>
                                        </li>
                                        <li data-target="#carouselProduct" data-slide-to="2"><img
                                            src="/img/producto-03.jpg"
                                            className="d-block w-100"/>
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            {/*// <!-- info -->*/}
                            <div className="col infoProduct">
                                <ProductDetail product={product}/>

                                <div id="accordion" className="accordionProduct">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link expand" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                    MEDIOS DE PAGO <span>+</span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Informacion medios de pago.
                                                <div className="row"><Preference/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed expand" data-toggle="collapse"
                                                        data-target="#collapseTwo" aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                    MEDIOS DE ENVIO <span>+</span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Informacion medios de ENVIO.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/*// <!-- description -->*/}
                        <div className="row">
                            <div className="col">
                                <div className="description">
                                    <h4 className="tit">Características del producto</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <strong>CARACTERÍSTICAS</strong>
                                    <ul>
                                        <li>- Gaming mouse óptico de alta calidad</li>
                                        <li>- Cableado con conexión USB</li>
                                        <li>- 6 Botones</li>
                                        <li>- Retroiluminado</li>
                                        <li>- Rueda scroll con textura antideslizante</li>
                                        <li>- Diseño ergonómico</li>
                                    </ul>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        );
    }
}

export default CardDetailComponent;