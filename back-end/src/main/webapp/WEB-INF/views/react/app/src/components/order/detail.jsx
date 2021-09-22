import React from "react";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";

const Detail = () => {
    const products = useSelector(state => Object.values(state.order.items));

    return (
        <section>
            <div className="cart">
                Tiene {products.length} productos en el carro.
                    <Link to="/order/details"> Ver mas ..</Link>
            </div>
        </section>
    )
}

export default Detail;