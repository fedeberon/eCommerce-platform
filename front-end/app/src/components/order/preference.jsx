import React from "react";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";

const Preference = () => {

    const id = useSelector(state => state.preference.id);

    return (
        <>
         {/*   <form action="/procesar-pago" method="POST">
                <script
                    src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                    data-preference-id={id}>
                </script>
            </form>*/}

            <a href={id}> Mercado Pago </a>
            </>
    )
}

export default Preference;