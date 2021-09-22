import React from 'react';
import {ordersActions} from '../../store';
import {useDispatch} from 'react-redux';

const Detail = (props) => {

    const dispatch = useDispatch();

    const addToOrder = (product) => {
        dispatch(ordersActions.addOrder(product));
    }

    const product = props.product;

    return (
        <div>
            <label>Product</label>
            <h1>{product.code}</h1>
            <h3>{product.description}</h3>
            <button onClick={() => props.handleDetail()}>Volver</button>
            <button onClick={() => addToOrder(product)}>Add to Car</button>
        </div>
    )
}

export default Detail;