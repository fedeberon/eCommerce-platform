import React from "react";
import {Link} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function Header() {
    return (
            <div>
                <h2>Accounts</h2>

                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/product">Productos</Link>
                    </li>
                    <li>
                        <Link to="/order/details">Detalles</Link>
                    </li>
                </ul>
            </div>
    );
}
