import {ActionTypes} from '../contants/action-types.js';
export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS = "SET_PRODUCTS",
        payload:products,
    };
};

export const selectedProduct = (product) => {
    return{
        type:ActionTypes.SELECTED_RPODUCT,
        payload:product,
    };
};

export const removeSelectedProduct = () => {
    return{
        type:ActionTypes.removeSeletedProduct,
    };
};