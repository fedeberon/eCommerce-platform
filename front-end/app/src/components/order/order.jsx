import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {ordersActions, preferenceActions} from "../../store";
import {Button, Table} from 'react-bootstrap';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Preference from "./preference";
import product from "../product/product";
import Figure from "react-bootstrap/Figure";

let api = axios.create({
    baseURL: 'http://localhost:8886/api',
    timeout: 10000,
});

const Order = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => Object.values(state.order.items));

    const [preferenceIsReady, setPreferenceIsReady] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        let details = [];

        this.state.products.map((product, index) => {
            let detail = {
                product: {
                    code: product.code,
                    name: product.description,
                    price: 200
                },
                quantity: 1
            }
            details.push(detail);
        })

        debugger;
        try {
            const res = await api
                .post('/cart/preference', details)
                .then(function (res) {
                    console.log(res.data);
                    dispatch(preferenceActions.set(res.data));
                    setPreferenceIsReady(true)
                })
                .catch(function (error) {
                    console.log(error)
                });
        } catch (error) {
            console.log(error);
        }
    }

    const removeProduct = (product) => {
        dispatch(ordersActions.remove(product));
    }

    return (
        <>  {!preferenceIsReady ?
            <form onSubmit={handleSubmit}>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.code}</td>
                                <td>{product.description}</td>
                                <td>{product.precioUniVta}</td>

                                <td>
                                    <Button variant="light" onClick={() => removeProduct(product)}>
                                        <a className="deletecart">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 427">
                                                <title>delete</title>
                                                <path
                                                    d="M272.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,272.4,154.7Z"/>
                                                <path
                                                    d="M154.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,154.4,154.7Z"/>
                                                <path
                                                    d="M68.4,127.121V373.5c0,14.562,5.34,28.238,14.668,38.051A49.243,49.243,0,0,0,118.8,427H308a49.229,49.229,0,0,0,35.73-15.449c9.328-9.813,14.668-23.489,14.668-38.051V127.121A38.2,38.2,0,0,0,348.6,52H297.4V39.5A39.28,39.28,0,0,0,257.8,0H169a39.28,39.28,0,0,0-39.6,39.5V52H78.2a38.2,38.2,0,0,0-9.8,75.121ZM308,407H118.8c-17.1,0-30.4-14.688-30.4-33.5V128h250V373.5C338.4,392.312,325.1,407,308,407ZM149.4,39.5A19.265,19.265,0,0,1,169,20h88.8a19.265,19.265,0,0,1,19.6,19.5V52h-128ZM78.2,72H348.6a18,18,0,0,1,0,36H78.2a18,18,0,1,1,0-36Z"/>
                                                <path
                                                    d="M213.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,213.4,154.7Z"/>
                                            </svg>
                                        </a>
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
                <div>
                    <div className="cart-total">
                        <h2 className="row text-primary mb-0">
                            <span className="col">Total:</span>
                            <span className="col text-right">$0</span>
                        </h2>
                    </div>
                    <div className="mb-3">
                        <Button variant="dark" type="submit" size="lg" block>Iniciar Compra</Button>
                    </div>
                </div>

            </form>
            :
            <Preference/>}
        </>
    )
}

export default Order;