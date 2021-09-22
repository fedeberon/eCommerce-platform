import { combineReducers, configureStore } from '@reduxjs/toolkit';

 
import { productsReducer as products } from './products';
import { ordersReducer as order } from './order'

const reducer = combineReducers({
 products,
 order,
});

export { productsActions } from './products';
export { ordersActions } from './order'

export default configureStore({ reducer });
