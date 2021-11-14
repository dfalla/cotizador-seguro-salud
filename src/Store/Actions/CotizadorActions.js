
import cotizadorService from '../../Services/CotizadorService';

export const LIST_PRODUCTS = "LIST_PRODUCTS";
export const LIST_PRODUCTS_SUCCESS = "LIST_PRODUCTS_SUCCESS";
export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";

export const listProductsSuccess = (payload) => ({
    type: LIST_PRODUCTS_SUCCESS,
    payload: payload
});

export const listProducts = (filter) => {

    return async function  (dispatch) {

        let persona = await cotizadorService.obtenerdatospersona(filter); 

        dispatch(listProductsSuccess(persona));
    }
};

export const addProductCart = (payload) => ({
    type: ADD_PRODUCT_CART,
    payload: payload
});