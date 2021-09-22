import React, {Component} from 'react';
import api from '../../axios'
import Spinner from 'react-bootstrap/Spinner'

class Products extends Component {

    state = {
        isLoading: false,
        products: [],
        details: false,
        selected: null,
    }

    componentDidMount() {
        this.findAll()
    }

    handleDetail = (index = null) => {
        this.setState({details: !this.state.details, selected: index != null ? this.state.products[index] : null})
    }

    render() {

        return (

            this.state.isLoading && <Spinner animation="border"/>,

            this.state.products.map((product, index) =>


                <div className="col-6 col-sm-4">
                    <div className="item animate" key={index}>
                        <a href="detalle.php">
                            <figure><img src="img/producto-01.jpg" className="foto"/></figure>
                            <div className="info">
                                <div className="key">#{index}</div>
                                <div className="productName"><h5>{product.description}</h5></div>
                                <div className="codigo">{product.code}</div>
                            </div>
                        </a>
                    </div>
                </div>
            )
        )
    }

    findAll = async () => {
        this.setState({products: [], isLoading: true})
        let data = await api.get('/product/list').then(({data}) => data);
        this.setState({products: data, isLoading: false})
    }
}

export default Products;


 