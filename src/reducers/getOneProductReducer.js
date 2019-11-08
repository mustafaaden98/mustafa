
export const getOneProductReducer = (state ={}, action) =>{
    switch(action.type){
        case "GET_PRODUCT":
            return{...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
}