import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function Home() {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>

                <ul>
                    <li>
                        <Link to="/option1">Option 1</Link>
                    </li>
                    <li>
                        <Link to="/option2">Option 2</Link>
                    </li>
                    <li>
                        <Link to="/option3">Option 3</Link>
                    </li>
                    <li>
                        <Link to="/option4">Option 4</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/:id" children={<Child />} />
                </Switch>
            </div>
        </Router>
    );
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    return (
        <div>
            <h3>PATH: {id}</h3>
        </div>
    );
}
