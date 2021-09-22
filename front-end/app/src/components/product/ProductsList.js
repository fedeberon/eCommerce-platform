import React from 'react';
import PaginationComponent from "./PaginationComponent";

class ProductsList extends React.Component {

    render() {

        return (

            <div className="categoria">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" href="/products" aria-current="page">Productos</li>
                        </ol>
                    </nav>
                    <h1 className="titcategory">Productos</h1>
                    <div className="row">
                        <div className="col-sm-3 sidebar display">
                            <h4>Categorias</h4>
                            <div className="list-group list-group-flush">
                                <button type="button" className="list-group-item list-group-item-action active">Periféricos
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Accesorios
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Notebooks
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Monitores
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Gaming
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <PaginationComponent search={this.props.match.params.search}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsList;