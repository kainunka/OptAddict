import { HEADER_TITLE } from '../actions/type'
import { applyMiddleware } from '../../node_modules/redux';

const INITIAL_STATE = {
    headerTitle: 'OPT ADDICT'
}

export const applyHeaderTitle = (state, action) => ({
    ...state,
    headerTitle: action.headerTitle
})

optAddictReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HEADER_TITLE: {
            return applyHeaderTitle(state, action)
        }
        default: return state
    }
}

export default optAddictReducer