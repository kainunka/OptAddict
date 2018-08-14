import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View, Platform, Image } from 'react-native'
import { connect } from 'react-redux'
import { actionHeaderTitle, _doCallFeedMangta } from '../actions/optAddict'
import { DATA_MANGA_FEED } from '../actions/type'
import Swiper from 'react-native-swiper';
import PhotoView from 'react-native-photo-view-ex';
import _ from 'lodash'

class ViewManga extends Component {
  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { _actionFeedManga, settingManga } = this.props
    _doCallFeedMangta(settingManga.keyDetail, settingManga.keyFeed).then((dataSnapShot) => {
        let dataFeed = dataSnapShot.toJSON()
        _actionFeedManga(dataFeed)
    })
  }

  render() {
    const { dataFeedManga } = this.props
    return (
        Object.keys(dataFeedManga).length ?
        <Swiper 
            style={styles.wrapper} showsButtons={false} showsPagination={false}
        >
            {_.map(_.values(dataFeedManga.gallery), (value, index) => 
            <PhotoView
                key={ index }
                source={{uri: value.url }}
                minimumZoomScale={0.5}
                maximumZoomScale={3}
                resizeMode='contain'
                onLoad={() => console.log("Image loaded!")}
                style={{backgroundColor: '#000', width: '100%', height: '100%'}} 
                onError={ (error) => console.log('error', error) }
            />
            )}
        </Swiper>
        : null
    );
  }
}

const mapStateToProps = (state) => {
  const { settingManga, dataFeedManga } = state.optState
  return {
    settingManga,
    dataFeedManga
  }
}

const mapDispatchToProps = (dispatch) => ({
    actionHeaderTitle,
    _actionFeedManga: (dataFeedManga) => dispatch({
      type: DATA_MANGA_FEED,
      dataFeedManga
    })
  })

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewManga)