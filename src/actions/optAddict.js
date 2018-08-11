import { HEADER_TITLE } from './type'

const actionHeaderTitleSuccess = (headerTitle) => {
    return {
        type: HEADER_TITLE,
        headerTitle
    }
}

export const actionHeaderTitle = (headerTitle) => {
    return (dispatch) => {
        dispatch(actionHeaderTitleSuccess(headerTitle))
    }
}