import { HEADER_TITLE } from './type'
import firebase from 'react-native-firebase'

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

export const _doCallListMangta = () => 
firebase.database().ref('simulate/manga/onepiece').once('value')
