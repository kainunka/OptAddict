import React, {Component} from 'react';
import { StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { actionHeaderTitle, _doCallFeedMangta } from '../actions/optAddict'
import Gallery from 'react-native-image-gallery';
import { DATA_MANGA_FEED } from '../actions/type'

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
    let dataUrl = []
    Object.keys(dataFeedManga).length ? 
        dataFeedManga.gallery.map((value, index) => {
            dataUrl.push({
                source: {
                    uri: value.url
                }
            })
        })
    : null
    return (
        Object.keys(dataUrl).length ?
            <ScrollView style={{ flex: 1 } }>
                <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    images={ dataUrl }
                />
            </ScrollView>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewManga)