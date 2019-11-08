import product from '../apis/product';

export const getAllProducts = () =>{
    return async (dispatch) =>{
        const response = await product.get('/product');

        // console.log(response.data)
        dispatch({type:"GET_PRODUCTS", payload: response.data})
    }
};
export const getProduct = (id) =>{
    return async dispatch =>{
        const response = await product.get(`/product/${id}`);

        // console.log(response.data)

        dispatch({type: "GET_PRODUCT", payload: response.data})
    }
}

