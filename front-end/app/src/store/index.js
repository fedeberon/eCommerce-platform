import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productsReducer as products } from './products';
import { ordersReducer as order } from './order'
import { preferenceReducer as preference } from "./preference";

const reducer = combineReducers({
 products,
 order,
 preference,
});

export { productsActions } from './products';
export { ordersActions } from './order'
export { preferenceActions } from './preference'

export default configureStore({ reducer });
