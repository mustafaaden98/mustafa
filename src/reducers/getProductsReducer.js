
export const getProductsReducer = (state = [], action) =>{
    switch(action.type){

        case 'GET_PRODUCTS':
            return([...state], [...action.payload])

        default:
            return state;
    }
}