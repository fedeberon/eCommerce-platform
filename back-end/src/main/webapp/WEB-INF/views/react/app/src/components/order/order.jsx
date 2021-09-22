import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {ordersActions} from "../../store";

const Order = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => Object.values(state.order.items));

    const removeProduct = (product) => {
        dispatch(ordersActions.remove(product));
    }

    return (
        <section>
            <h2>Order</h2>
            <div className="containerOrder">
                {
                    products.map(p => (
                        <article className="orders">
                            <h3>{p.code}</h3>
                            <label>{p.description}</label>
                            <div>
                                <button onClick={() => removeProduct(p)}>Quitar</button>
                            </div>
                        </article>
                    ))
                }
            </div>

        </section>
    )

}

export default Order;