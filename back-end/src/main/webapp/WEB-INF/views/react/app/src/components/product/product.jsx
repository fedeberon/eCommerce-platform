import React, {Component} from 'react';
import api from '../../axios'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import Detail from './detail'

class Products extends Component {

    state = {
        isLoading: false,
        products: [],
        details: false,
        selected: null

    }

    componentDidMount() {
        this.findAll()
    }

    handleDetail = (index = null) => {
        this.setState({details: !this.state.details, selected: index != null ? this.state.products[index] : null})
    }

    render() {
        return <div> {!this.state.details ?
            <div><label>Se encontraron {this.state.products.length} productos</label>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.isLoading && <td><Spinner animation="border"/></td>}

                    {this.state.products.map((product, index) => {
                        return (

                            <tr key={index}>
                                <td>{product.code}</td>
                                <td>{product.description}</td>
                                <td>
                                    <button onClick={() => {
                                        this.handleDetail(index)
                                    }}> Ver Detalle
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
            :
            <Detail product={this.state.selected} handleDetail={this.handleDetail}/>}

        </div>;
    }

    findAll = async () => {
        this.setState({products: [], isLoading: true})
        let data = await api.get('/product/list').then(({data}) => data);
        this.setState({products: data, isLoading: false})
    }
}

export default Products;


 