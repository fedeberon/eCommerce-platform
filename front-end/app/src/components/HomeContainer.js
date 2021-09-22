import React from 'react';
import CarouselComponent from "./home/CarouselComponent";
import BannersHomeComponent from "./home/BannersHomeComponent";
import CategoriesHomeComponent from "./home/CategoriesHomeComponent";
import FeaturedProductsComponent from "./home/FeaturedProductsComponent";

class HomeContainer extends React.Component {

    render () {
        return (
            <div >
                <CarouselComponent/>
                <BannersHomeComponent/>
                <CategoriesHomeComponent/>
                <FeaturedProductsComponent/>
            </div>
        );
    }
}

export default HomeContainer;