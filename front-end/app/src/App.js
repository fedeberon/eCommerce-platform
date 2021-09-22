import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import Order from './components/order/order';
import Products from './components/product/product'
import OrderDetail from './components/order/detail'
import store from './store';
import Header from "./components/header/Header";
import Preference from "./components/order/preference"
import FooterComponent from "./components/home/FooterComponent";
import Contact from "./components/navbar/Contact";
import Switch from "react-bootstrap/Switch";
import Route from "react-router-dom/es/Route";
import HomeContainer from "./components/HomeContainer";
import AboutUs from "./components/navbar/AboutUs";
import Services from "./components/navbar/Services";
import CardDetailComponent from "./components/product/CardDetailComponent";
import ProductsList from "./components/product/ProductsList";


function App() {
   
  return (
    <Provider store={store}>
        <Header/>
        <Router>
            {/*<OrderDetail />*/}
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/order/" component={OrderDetail}/>
                <Route exact path="/order/details" component={Order}/>
                <Route exact path="/order/preference" component={Preference}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/aboutus" component={AboutUs}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/details/:id" component={CardDetailComponent}/>
                <Route exact path="/products" component={ProductsList}/>
                <Route exact path="/products/search=:search" component={ProductsList}/>
                {/*<Route exact path="/login" component={LoginComponent}/>*/}
            </Switch>
        </Router>
        <FooterComponent/>
    </Provider>
  );
}

export default App;


