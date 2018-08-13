import React, {Component} from 'react';
import { StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { actionHeaderTitle } from '../actions/optAddict'
import Gallery from 'react-native-image-gallery';

class ViewManga extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title'),
  });

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { feedImage } = this.props
    let dataUrl = []
    Object.keys(feedImage).length ? 
        feedImage.map((value, index) => {
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
  const { feedImage } = state.optState
  return {
    feedImage
  }
}

const mapDispatchToProps = {
  actionHeaderTitle
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewManga)