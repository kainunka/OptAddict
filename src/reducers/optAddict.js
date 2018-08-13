import { HEADER_TITLE, DATA_MANGA_LIST, DATA_MANGA_DETAIL, DATA_MANGA_FEED, SETTING_MANGA } from '../actions/type'

const INITIAL_STATE = {
    headerTitle: {
        addict: 'OPT ADDICT',
        manga: 'MANGA',
        anime: 'ANIME',
        setting: 'SETTING'
    },
    dataListManga: [],
    dataDetailManga: {},
    dataFeedManga: {},
    settingManga: {
        keyDetail: 0,
        keyFeed: 0
    }
}

const applyHeaderTitle = (state, action) => ({
    ...state,
    headerTitle: action.headerTitle
})

const applyDataListManga = (state, action) => ({
    ...state,
    dataListManga: action.dataListManga
}) 

const applyDetailManga = (state, action) => ({
    ...state,
    dataDetailManga: action.dataDetailManga
})

const applyFeedManga = (state, action) => ({
    ...state,
    dataFeedManga: action.dataFeedManga
})

const applySettingManga = (state, action) => ({
    ...state,
    settingManga: action.settingManga
}) 

optAddictReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HEADER_TITLE: {
            return applyHeaderTitle(state, action)
        }
        case DATA_MANGA_LIST: {
            return applyDataListManga(state, action)
        }
        case DATA_MANGA_DETAIL: {
            return applyDetailManga(state, action)
        }
        case DATA_MANGA_FEED: {
            return applyFeedManga(state, action)
        }
        case SETTING_MANGA: {
            return applySettingManga(state, action)
        }
        default: return state
    }
}

export default optAddictReducer