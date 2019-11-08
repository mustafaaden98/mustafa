import {combineReducers} from 'redux';
import { getProductsReducer } from './getProductsReducer';
import { getOneProductReducer } from './getOneProductReducer';

export default combineReducers({
    products: getProductsReducer,
    product: getOneProductReducer
})