import { HEADER_TITLE, DATA_MANGA_LIST, SETTING_MANGA, FEED_MANGA } from '../actions/type'

const INITIAL_STATE = {
    headerTitle: {
        addict: 'OPT ADDICT',
        manga: 'MANGA',
        anime: 'ANIME',
        setting: 'SETTING'
    },
    dataListManga: [],
    settingManga: {
        keyID: 0
    },
    feedImage: []
}

const applyHeaderTitle = (state, action) => ({
    ...state,
    headerTitle: action.headerTitle
})

const applyDataListManga = (state, action) => ({
    ...state,
    dataListManga: action.dataListManga
}) 

const applySettingManga = (state, action) => ({
    ...state,
    settingManga: action.settingManga
}) 

const applyFeedImage = (state, action) => ({
    ...state,
    feedImage: action.feedImage
}) 

optAddictReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HEADER_TITLE: {
            return applyHeaderTitle(state, action)
        }
        case DATA_MANGA_LIST: {
            return applyDataListManga(state, action)
        }
        case SETTING_MANGA: {
            return applySettingManga(state, action)
        }
        case FEED_MANGA: {
            return applyFeedImage(state, action)
        }
        default: return state
    }
}

export default optAddictReducer