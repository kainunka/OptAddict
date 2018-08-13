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
firebase.database().ref(`manga/cartoon`).once('value')

export const _doCallDetailMangta = (key) => 
firebase.database().ref(`manga/detail/${key}`).once('value')

export const _doCallFeedMangta = (keyDetail, keyFeed) => 
firebase.database().ref(`manga/feed/${keyDetail}/${keyFeed}`).once('value')

