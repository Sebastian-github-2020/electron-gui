import {login} from './actions'
interface IState {
    token: string
}

const initialState: IState = {
    token: ""
}

interface IAction<T> {
    type: string,
    payload: T
}

const UserReducer = (state = initialState, action: IAction<any>) => {

    switch (action.type) {
        case login:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}
export default UserReducer