import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller'
export const actFetchProductsRequest = () => {
    return (dispach) => {
        return callApi('products', 'GET', null).then(res => {
            dispach(actFetchProducts(res.data));
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispach => {
        return callApi('products', 'POST', product).then(res => {
            dispach(actAddProduct(product));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}