import { createStore, combineReducers} from 'redux'


const  userInitialState = {
    id : null,
    username : 'Kevin'
}

const errorReducer = ( state = { erros : []}, action) => {
    switch(action.type){
        case 'ADD_ERROR':
            return {errors : [...state.erros,action.payload]}
        case 'RESET_ERROR':
                return { errors : []}
        default :
                return state
    }
}
const userReducer = ( state = userInitialState, action) => {
    switch(action.type){
        case 'ADD_USER':
            return {errors : [...state.erros,action.payload]}
        case 'RESET':
                return { errors : []}
        default :
                return state
    }
}
const rootReducer = combineReducers({
    users : userReducer,
    errors : errorReducer
})

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({
    type : 'ADD_ERROR',
    payload : {
        id: Math.random(),
        message : 'oups'
    }
})



export default store