import { ADD_DATA } from '../actions/index'

const initialState = {
    data: 0,
    number: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_DATA:
            return {
                data: action.data
            }
            
            default : 
            return state
    }
}